import React from 'react'
import { useQuery } from '@/utils/customHook'

function Write() {
  const query = useQuery()
  return <div>{query.get('title')}</div>
}

export default Write
