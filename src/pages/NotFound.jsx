import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
             <img
                src="./images/course.png"
                className="aspect-auto max-w-sm h-auto mb-5"
                loading="lazy"
            />
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary">Page Not Found</h1>
                <p className="text-lg text-primary mt-4">Sorry, the page you are looking for does not exist.</p>
            </div>
            <img
                src="./images/icon-dotted-map-2.png"
                alt="wallpaper"
                className="absolute right-0 top-0"
            />
        </div>
    );
}

export default NotFound;
