import Image from 'next/image';
import { FaGraduationCap, FaList } from 'react-icons/fa';
import { TbCategory } from 'react-icons/tb';

interface IProps {
    title: string;
    numberOfQuestion: number;
    image: string;
    category: string;
    grade: string;
    author: string;
    onMouseEnter?: () => void;
}

function QuizCardResult({ title, numberOfQuestion, image, category, grade, author, onMouseEnter }: IProps) {
    return (
        <div onMouseEnter={onMouseEnter} className='flex w-full rounded border bg-white p-2 shadow-md  hover:border-slate-200 hover:bg-slate-100 hover:shadow'>
            <div className='relative flex h-24 w-24 items-center overflow-hidden rounded border'>
                <div className='relative flex h-full w-full  items-center'>
                    <Image src={image || '/assets/images/default_quiz_background.png'} alt='Question Image' fill objectFit='contain' />
                </div>
                <div className='absolute left-0 top-0 inline-flex items-center rounded-br bg-gray-800 px-1'>
                    <span className='text-[10px] font-semibold text-white'>Quiz</span>
                </div>
            </div>
            <div className=' ml-2 w-full py-2 text-left'>
                <div className='flex w-full flex-col gap-2'>
                    <div className='flex w-full items-start justify-between text-base font-semibold text-slate-800'>
                        <span>{title}</span>
                    </div>
                    <div className='flex flex-wrap items-start gap-2 text-xs font-semibold text-slate-600'>
                        <div className='flex items-center gap-x-1'>
                            <FaList className='text-xs' />
                            <span>{numberOfQuestion}</span>
                            <span>Questions</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <TbCategory className='text-xs' />
                            <span>{category}</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <FaGraduationCap className='text-xs' />
                            <span>{grade}</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-start gap-2 text-xs font-semibold text-slate-600'>
                        <div className='flex items-center gap-x-1'>
                            <span>Author : {author}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizCardResult;
