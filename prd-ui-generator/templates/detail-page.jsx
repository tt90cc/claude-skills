import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'

// 详情页模板
export default function DetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isCreate = !id || id === 'create'

  const [formData, setFormData] = useState({
    name: '',
    app_id: '',
    app_secret: '',
    enabled: true,
    store_id: null,
    store_name: null,
  })

  const [bindSearch, setBindSearch] = useState('')
  const [selectedStore, setSelectedStore] = useState(null)

  // 模拟商户列表
  const storeList = [
    { store_id: 1, store_name: '店铺A' },
    { store_id: 2, store_name: '店铺B' },
  ]

  const filteredStores = storeList.filter(store =>
    store.store_name.includes(bindSearch)
  )

  useEffect(() => {
    // 加载数据
    if (!isCreate) {
      // 模拟加载现有数据
      setFormData({
        name: '示例名称',
        app_id: 'wx001',
        app_secret: 'secret',
        enabled: true,
        store_id: 1,
        store_name: '店铺A',
      })
      setSelectedStore({ store_id: 1, store_name: '店铺A' })
    }
  }, [id, isCreate])

  const handleSubmit = () => {
    console.log('提交:', formData)
    navigate('/admin/page')
  }

  const handleBindConfirm = () => {
    if (selectedStore) {
      setFormData({
        ...formData,
        store_id: selectedStore.store_id,
        store_name: selectedStore.store_name,
      })
    }
    // 关闭弹窗逻辑
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/page')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {isCreate ? '新增页面' : '编辑页面'}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {isCreate ? '创建新记录' : '修改记录信息'}
            </p>
          </div>
        </div>
      </div>

      {/* 表单内容 */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                名称 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="请输入名称"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AppID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.app_id}
                onChange={(e) => setFormData({ ...formData, app_id: e.target.value })}
                placeholder="请输入AppID"
                disabled={!isCreate}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono ${!isCreate ? 'bg-gray-50 text-gray-500' : ''}`}
              />
            </div>

            {/* 开关 */}
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <span className="font-medium text-gray-700">启用状态</span>
                <p className="text-sm text-gray-500">关闭后无法访问</p>
              </div>
              <button
                onClick={() => setFormData({ ...formData, enabled: !formData.enabled })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            {/* 绑定区域 */}
            <div className="py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-700">绑定商户</span>
                  <p className="text-sm text-gray-500">
                    {formData.store_name ? `已绑定至：${formData.store_name}` : '未绑定'}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/admin/page/${id}?action=bind`)}
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                >
                  {formData.store_id ? '更换' : '绑定'}
                </button>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button onClick={() => navigate('/admin/page')} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">取消</button>
            <button onClick={handleSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">保存</button>
          </div>
        </div>
      </div>

      {/* 绑定弹窗（可根据需要启用）}
      {showBindDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[500px] p-6">
            <h3 className="text-lg font-semibold mb-4">绑定商户</h3>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="搜索商户..."
                  value={bindSearch}
                  onChange={(e) => setBindSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mt-2 border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
                {filteredStores.map(store => (
                  <div
                    key={store.store_id}
                    onClick={() => setSelectedStore(store)}
                    className={`p-3 cursor-pointer hover:bg-blue-50 ${selectedStore?.store_id === store.store_id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                  >
                    {store.store_name}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => navigate(`/admin/page/${id}`)} className="px-4 py-2 border border-gray-300 rounded-lg">取消</button>
              <button onClick={handleBindConfirm} disabled={!selectedStore} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50">确定</button>
            </div>
          </div>
        </div>
      )}
      */}
    </div>
  )
}
