'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-full">
      {/* PC 네비게이션 */}
      <div className="h-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          법률포스트
        </Link>
        <div className="hidden md:flex gap-6">
          {/* 사례 드롭다운 */}
          <div className="relative group">
            <button className="flex items-center py-4">
              사례
              <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg -mt-2 pt-2">
              <Link href="/cases/bankruptcy" className="block px-4 py-2 hover:bg-gray-100">도산</Link>
              <Link href="/cases/civil" className="block px-4 py-2 hover:bg-gray-100">민사</Link>
              <Link href="/cases/criminal" className="block px-4 py-2 hover:bg-gray-100">형사</Link>
            </div>
          </div>

          <Link href="/precedents" className="py-4">판례</Link>

          {/* 뉴스 드롭다운 */}
          <div className="relative group">
            <button className="flex items-center py-4">
              뉴스
              <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg -mt-2 pt-2">
              <Link href="/news/law" className="block px-4 py-2 hover:bg-gray-100">법률</Link>
              <Link href="/news/society" className="block px-4 py-2 hover:bg-gray-100">사회</Link>
              <Link href="/news/economy" className="block px-4 py-2 hover:bg-gray-100">경제</Link>
              <Link href="/news/politics" className="block px-4 py-2 hover:bg-gray-100">정치</Link>
              <Link href="/news/science" className="block px-4 py-2 hover:bg-gray-100">과학</Link>
              <Link href="/news/culture" className="block px-4 py-2 hover:bg-gray-100">문화</Link>
              <Link href="/news/world" className="block px-4 py-2 hover:bg-gray-100">세계</Link>
            </div>
          </div>
        </div>

        {/* 모바일 햄버거 메뉴 */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="px-4 py-2">사례</div>
          <Link href="/cases/bankruptcy" className="block px-8 py-2 hover:bg-gray-100">- 도산</Link>
          <Link href="/cases/civil" className="block px-8 py-2 hover:bg-gray-100">- 민사</Link>
          <Link href="/cases/criminal" className="block px-8 py-2 hover:bg-gray-100">- 형사</Link>
          
          <Link href="/precedents" className="block px-4 py-2 hover:bg-gray-100">판례</Link>
          
          <div className="px-4 py-2">뉴스</div>
          <Link href="/news/law" className="block px-8 py-2 hover:bg-gray-100">- 법률</Link>
          <Link href="/news/society" className="block px-8 py-2 hover:bg-gray-100">- 사회</Link>
          <Link href="/news/economy" className="block px-8 py-2 hover:bg-gray-100">- 경제</Link>
          <Link href="/news/politics" className="block px-8 py-2 hover:bg-gray-100">- 정치</Link>
          <Link href="/news/science" className="block px-8 py-2 hover:bg-gray-100">- 과학</Link>
          <Link href="/news/culture" className="block px-8 py-2 hover:bg-gray-100">- 문화</Link>
          <Link href="/news/world" className="block px-8 py-2 hover:bg-gray-100">- 세계</Link>
        </div>
      )}
    </nav>
  );
}