import React from 'react'

const CarouselItem = ({ backgroundColor, svg }) => {
  return (
    <div className={`div1 pt-4 px-5 pb-10 mx-2 ${backgroundColor} flex w-[475px] text-sm rounded-xl`}>
      <div className = "div2 mr-2">

        {/* <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
          <path d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8782 11.3073 13.272C10.9134 13.6658 10.6922 14.2 10.6922 14.7569V27.3569C10.6922 28.2852 11.0609 29.1754 11.7173 29.8318C12.3737 30.4882 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4882 32.2827 29.8318C32.939 29.1754 33.3078 28.2852 33.3078 27.3569V18.9569C33.3078 18.4 33.0865 17.8658 32.6927 17.472C32.2989 17.0782 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1646 30.3263 27.3426 30.195 27.4739C30.0637 27.6052 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6052 29.205 27.4739C29.0737 27.3426 29 27.1646 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3713 13.6737 17.1932 13.805 17.0619C13.9363 16.9307 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9307 25.995 17.0619C26.1262 17.1932 26.2 17.3713 26.2 17.5569C26.2 17.7426 26.1262 17.9206 25.995 18.0519C25.8637 18.1832 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1832 13.805 18.0519C13.6737 17.9206 13.6 17.7426 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1307 25.995 21.2619C26.1262 21.3932 26.2 21.5713 26.2 21.7569C26.2 21.9426 26.1262 22.1206 25.995 22.2519C25.8637 22.3832 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3832 20.805 22.2519C20.6737 22.1206 20.6 21.9426 20.6 21.7569C20.6 21.5713 20.6737 21.3932 20.805 21.2619C20.9363 21.1307 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7713 20.6737 25.5932 20.805 25.4619C20.9363 25.3307 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3307 25.995 25.4619C26.1262 25.5932 26.2 25.7713 26.2 25.9569C26.2 26.1426 26.1262 26.3206 25.995 26.4519C25.8637 26.5832 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5832 20.805 26.4519C20.6737 26.3206 20.6 26.1426 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1307 18.995 21.2619C19.1263 21.3932 19.2 21.5713 19.2 21.7569V25.9569C19.2 26.1426 19.1263 26.3206 18.995 26.4519C18.8637 26.5832 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5832 13.805 26.4519C13.6737 26.3206 13.6 26.1426 13.6 25.9569V21.7569C13.6 21.5713 13.6737 21.3932 13.805 21.2619C13.9363 21.1307 14.1143 21.0569 14.3 21.0569Z" fill="white" />
        </svg> */}

        {svg} {/* Render the prop svg here */}

      </div>
      <div>
        <div className = "div3 font-semibold mb-3">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
        </div>
        <div className = "div4 text-sm ">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
        </div>
      </div>
    </div>
  )
}

export default CarouselItem