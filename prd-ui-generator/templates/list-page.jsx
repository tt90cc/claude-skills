import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Plus, Edit, Unlink, Delete, Power, AlertCircle } from 'lucide-react'

// 状态标签组件
const StatusTag = ({ status }) => {
  const config = {
    normal: { text: '正常', color: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
    disabled: { text: '禁用', color: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
    unbound: { text: '未绑定', color: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  }
  const { text, color, dot } = config[status] || config.unbound

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`}></span>
      {text}
    </span>
  )
}

// 列表页模板
export default function ListPage() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const [deleteModal, setDeleteModal] = useState({ visible: false, item: null })
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  // 模拟数据
  const [list] = useState([
    { id: 1, name: '示例1', app_id: 'wx001', store_name: '店铺A', status: 'normal' },
    { id: 2, name: '示例2', app_id: 'wx002', store_name: '店铺B', status: 'normal' },
  ])

  const filteredList = list.filter(item =>
    item.name.includes(searchText) || item.app_id?.includes(searchText)
  )

  const paginatedList = filteredList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const total = filteredList.length

  const handleEdit = (item) => {
    navigate(`/admin/page/${item.id}`)
  }

  const handleDelete = () => {
    console.log('删除:', deleteModal.item?.id)
    setDeleteModal({ visible: false, item: null })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">页面标题</h1>
            <p className="text-sm text-gray-500 mt-1">页面描述</p>
          </div>
          <button
            onClick={() => navigate('/admin/page/create')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={18} />
            新增
          </button>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="搜索..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 数据表格 */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">序号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">AppID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">店铺</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-40">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedList.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">{(currentPage - 1) * pageSize + index + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">{item.app_id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.store_name || '-'}</td>
                  <td className="px-6 py-4"><StatusTag status={item.status} /></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(item)} className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded" title="编辑">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => setDeleteModal({ visible: true, item })} className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded" title="删除">
                        <Delete size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 分页 */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-500">共 {total} 条记录</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">上一页</button>
              <span className="text-sm text-gray-600">{currentPage} / {Math.ceil(total / pageSize) || 1}</span>
              <button onClick={() => setCurrentPage(p => Math.min(Math.ceil(total / pageSize) || 1, p + 1))} disabled={currentPage >= Math.ceil(total / pageSize)} className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">下一页</button>
            </div>
          </div>
        </div>
      </div>

      {/* 删除确认弹窗 */}
      {deleteModal.visible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-red-500" size={24} />
              <h3 className="text-lg font-semibold">确认删除</h3>
            </div>
            <p className="text-gray-600 mb-6">确定要删除"{deleteModal.item?.name}"吗？</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteModal({ visible: false, item: null })} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">取消</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">确定删除</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
