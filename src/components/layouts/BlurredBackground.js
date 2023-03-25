const BlurredBackground = ( { children } ) =>
{

    return (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-4 bg-white shadow-lg sm:rounded-xl sm:p-10 bg-clip-padding bg-opacity-20 border border-gray-200" style={{backdropFilter: 'blur(20px)'}}>
                <div className="max-w-md mx-auto">
                    <div>{ children }</div>
                </div>
            </div>
        </div>
    );
};

export default BlurredBackground;






