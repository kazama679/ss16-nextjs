"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const [select, setSelect] = useState<string>("");
  const route=useRouter();
  const t = useTranslations('HomePage');
  const b = useTranslations('HomePage');
  const handleLangue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value==='en'){
      route.push('/en')
      setSelect("en")
    } else{
      route.push('/vi')
      setSelect("vi")
    }
  }
  return <div>
    <h1>{t('title')}</h1>
    <h1>{b('description')}</h1>
    <select onChange={handleLangue} name="" id="">
      <option selected={select==="en"?true:false} value="en">English</option>
      <option selected={select==="vi"?true:false} value="vi">Vietnamese</option>
    </select>
  </div>
}