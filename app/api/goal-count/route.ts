import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

// GET is getting info
export async function GET() {
  const { data, error } = await supabase
    .from('goal_count')
    .select('count')
    .single()

  if (error) {
    return NextResponse.json({ count: 0 }, { status: 500 })
  }

  return NextResponse.json({ count: data.count })
}

// POST is putting / acting on info
export async function POST() {
  const { data: current } = await supabase
    .from('goal_count')
    .select('count')
    .single()

  const newCount = (current?.count || 0) + 1

  const { error } = await supabase
    .from('goal_count')
    .update({ count: newCount })
    .eq('id', 1)

  if (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }

  return NextResponse.json({ count: newCount })
}
