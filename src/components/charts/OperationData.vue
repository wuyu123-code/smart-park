<template>
  <div class="operation-data">
    <table class="operation-table">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in rows" :key="item.id">
          <td
            v-for="column in columns"
            :key="column.key"
            :title="String(item[column.key] ?? '—')"
          >
            {{ item[column.key] ?? '—' }}
          </td>
        </tr>

        <tr v-if="rows.length === 0">
          <td :colspan="columns.length" class="empty">
            暂无运行数据
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
})

const columns = [
  { key: 'name', label: '名称' },
  { key: 'electricity', label: '总电量' },
  { key: 'electricityCost', label: '总电费' },
  { key: 'load', label: '总负荷' },
  { key: 'averageEnergy', label: '平均能耗' },
]
</script>

<style scoped>
.operation-data {
  max-height: 360px;
  margin: 8px 16px 12px;
  overflow-y: auto;
  scrollbar-width: none;
  pointer-events: auto;
}

.operation-data::-webkit-scrollbar {
  display: none;
}

.operation-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  color: #fff;
  font-size: 14px;
}

.operation-table th,
.operation-table td {
  padding: 9px 5px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 表头随列表滚动时保持可见 */
.operation-table th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: rgba(15, 29, 43, 0.95);
  color: #43c4f1;
  font-weight: bold;
}

.operation-table th:first-child,
.operation-table td:first-child {
  width: 24%;
  text-align: left;
  padding-left: 10px;
}

.operation-table td {
  font-variant-numeric: tabular-nums;
}

/* 奇数行：深色透明背景 */
.operation-table tbody tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.22);
}

/* 偶数行：蓝色透明背景 */
.operation-table tbody tr:nth-child(even) {
  background: rgba(36, 106, 150, 0.48);
}

.operation-table tbody tr:hover {
  background: rgba(47, 137, 190, 0.55);
}

.operation-table .empty {
  padding: 25px 10px;
  color: #9fb2c5;
  text-align: center;
}
</style>