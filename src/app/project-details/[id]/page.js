"use client"

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import React from 'react'
import Myproject1 from '../page';

const Myproject = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div>
      <Myproject1 id={id} />
    </div>
  )
}
export default Myproject