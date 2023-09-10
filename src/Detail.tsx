import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

interface propsInterface {
  data: {
    name: string;
    thumbnail: { path: string; extension: string };
    id: string;
    description: string;
  };
}

export default function Detail() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const regex = /[^0-9]/g;
  const result = location.pathname.replace(regex, "");

  const [characterData, setCharacterData] = useState({}) as any;

  const getCharacter = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${result}`
    );
    const jsonData = await response.json();

    setCharacterData(jsonData.data.results[0]);
    console.log(jsonData.data.results[0]);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="flex justify-center w-full">
      {isLoading ? (
        <div className="mt-5">꺼블위키 키는중...</div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full ">
          <Link
            to={"/"}
            className="flex items-center w-full h-8 p-2 bg-blue-400 text-gray-50"
          >
            꺼블위키
          </Link>
          <div className="flex flex-col items-center w-full p-3">
            <h2 className="w-full text-3xl font-bold">{characterData.name}</h2>
            <span className="w-full text-xs text-gray-600 text-end">
              최근 수정 시각: 2023-09-09 21:57:18
            </span>

            <div className="w-full p-1 mt-32 mb-4 text-sm border">
              분류 : <span className="text-blue-400">마블 유니버스</span>
            </div>
            <div className="flex flex-col items-center justify-center w-11/12 border-2  max-w-[500px]">
              <span className="w-full p-2 text-lg font-bold text-center bg-gray-200">
                {characterData.name}
              </span>
              <span className="p-2 text-lg font-bold">
                마블 유니버스 캐릭터
              </span>
              <img
                src={`${characterData?.thumbnail?.path}.${characterData?.thumbnail?.extension}`}
                alt={`${characterData?.name}'s image`}
                className="object-cover w-full max-w-[350px] h-auto  max-h-[500px]"
              />

              <div className="w-full divide-y ">
                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    설명
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">
                      {characterData?.description
                        ? characterData?.description
                        : "그런거 없따."}
                    </span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    국적
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">대한민국</span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    신체
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">156cm, 42kg, AB형</span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    학력
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">
                      경북대학교 사회과학대학 (문헌정보학 / 학사)
                    </span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    MBTI
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">INFP</span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    소속
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">마블 유니버스</span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    데뷔
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <span className="p-2 bg-white">
                      2017년 10월 16일
                      <span className="text-xs font-bold">
                        (데뷔일로부터 +2156일, 5주년)
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-full py-1 text-sm font-semibold text-blue-600">
                    관련 링크
                  </span>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    공식 정보
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <a
                      target="_blank"
                      href={characterData?.urls[0]?.url}
                      className="p-2 text-blue-400 bg-white hover:underline underline-offset-1"
                    >
                      보러가기
                    </a>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    위키
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <a
                      target="_blank"
                      href={characterData?.urls[1]?.url}
                      className="p-2 text-blue-400 bg-white hover:underline underline-offset-1"
                    >
                      공식페이지
                    </a>
                  </div>
                </div>

                <div className="flex w-full bg-gray-300 ">
                  {" "}
                  <span className="flex items-center justify-center w-32 text-sm font-semibold text-blue-600">
                    코믹스
                  </span>
                  <div className="flex flex-col w-full text-sm divide-y-2">
                    <a
                      target="_blank"
                      href={characterData?.urls[2]?.url}
                      className="p-2 text-blue-400 bg-white hover:underline underline-offset-1"
                    >
                      홈페이지
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <section className="w-full p-5 text-sm ">
              <div className="w-full border">
                <h3 className="p-3 text-base">목차</h3>

                <ul className="p-1 ml-10">
                  <span className="text-blue-500">1.</span> 개요
                </ul>
                <ul className="p-1 ml-10">
                  <span className="text-blue-500">2.</span> 활동
                  <li className="ml-10">
                    {" "}
                    <span className="text-blue-500">2.1</span> 마블 유니버스
                  </li>
                  <li className="ml-10 ">
                    {" "}
                    <span className="text-blue-500">2.2</span> 마블 시네마틱
                    유니버스
                  </li>
                </ul>
                <ul className="p-1 ml-10">
                  <span className="text-blue-500">3.</span> 사건사고
                  <li className="ml-10 ">
                    {" "}
                    <span className="text-blue-500">3.1</span> 롯데리아 캐첩 및
                    빨대 절도{" "}
                  </li>
                  <li className="ml-10 ">
                    <span className="text-blue-500">3.2</span> 스타벅스 냅킨
                    종이학 논란
                  </li>
                  <li className="ml-10 ">
                    {" "}
                    <span className="text-blue-500">3.3</span> 노인정 리모컨
                    찬탈자?
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
