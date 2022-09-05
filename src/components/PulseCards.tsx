export const PulseCards = () => {
  return (
    <div className="grid md:flex relative">
      <div className="animate-pulse grid md:flex relative w-[15rem] md:w-[25rem] p-4 m-1  justify-items-center border-solid border-2 border-black rounded-md">
        <div className="flex flex-col justify-items-center justify-center items-center">
          <img className="bg-gray-600 w-[90px] h-[90px] justify-center rounded-full" />
          <h3 className="p-1 m-2  w-40 h-20 bg-gray-600 not-italic text-center text-base leading-6 text-header-dark dark:text-header-light"></h3>
        </div>
        <div className="flex flex-col justify-items-center space-y-3">
          <p className="bg-gray-600 p-0 pt-0 m-0 h-20 not-italic text-center text-sm leading-6 text-header-dark dark:text-header-light" />
          <div>
            <button
              className={`h-8 w-32 px-3 m-1 font-semibold text-btn-text rounded bg-gray-600`}
            />
            <button
              className={
                'bg-no-repeat bg-center absolute justify-self-start bg-gray-600 w-7 h-8 rounded-md mt-1'
              }
            />
          </div>
          <button
            className={`h-8 w-40 px-3 m-1 font-semibold text-btn-text rounded bg-gray-600`}
          />
        </div>
      </div>
      <div className="animate-pulse grid md:flex relative w-[15rem] md:w-[25rem] p-4 m-1  justify-items-center border-solid border-2 border-black rounded-md">
        <div className="flex flex-col justify-items-center justify-center items-center">
          <img className="bg-gray-600 w-[90px] h-[90px] justify-center rounded-full" />
          <h3 className="p-1 m-2  w-40 h-20 bg-gray-600 not-italic text-center text-base leading-6 text-header-dark dark:text-header-light"></h3>
        </div>
        <div className="flex flex-col justify-items-center space-y-3">
          <p className="bg-gray-600 p-0 pt-0 m-0 h-20 not-italic text-center text-sm leading-6 text-header-dark dark:text-header-light" />
          <div>
            <button
              className={`h-8 w-32 px-3 m-1 font-semibold text-btn-text rounded bg-gray-600`}
            />
            <button
              className={
                'bg-no-repeat bg-center absolute justify-self-start bg-gray-600 w-7 h-8 rounded-md mt-1'
              }
            />
          </div>
          <button
            className={`h-8 w-40 px-3 m-1 font-semibold text-btn-text rounded bg-gray-600`}
          />
        </div>
      </div>
    </div>
  );
};
