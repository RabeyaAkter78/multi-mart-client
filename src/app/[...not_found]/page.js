'use client'
import { AllImages } from '@/assets/AllImages';
import Image from 'next/image';
import React from 'react';

const error = () => {
    return (
        <div className='h-screen container mx-auto flex items-center justify-center'>
            <div className=' my-20 '>
            <Image src={AllImages.error} height={1024} width={1024} alt='error'></Image>
            </div>
        </div>
    );
};

export default error;