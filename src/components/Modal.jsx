import React from 'react'

function Modal({openModal}) {
  return (
    <div className="modal-overlay">
        <div className="inner-modal">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquam sint expedita dolorem pariatur odit dignissimos distinctio aliquid, inventore totam in exercitationem magnam laudantium illum fuga quasi, iure tempore nihil velit, vero molestiae similique odio doloremque asperiores! Mollitia laborum ducimus exercitationem deleniti similique laboriosam ex voluptatum libero perferendis non nam soluta distinctio accusantium reiciendis omnis expedita eius, perspiciatis quod quam unde! Impedit incidunt eligendi laborum eveniet illum facilis? Recusandae quod, mollitia rerum minus odit ipsa magnam animi ullam molestias, eum, incidunt veritatis esse adipisci ab maiores dolor voluptatum culpa! Ea beatae eius autem sequi sit soluta voluptate laudantium temporibus qui, repellendus voluptatem placeat esse magni asperiores, ad aliquam tenetur laboriosam fugiat cum? Consequuntur dicta in tempore nulla at numquam animi asperiores facilis facere velit mollitia quidem, quam iusto quos ab, eius praesentium ipsam? Totam dolor vel doloremque beatae ipsa eaque consequatur! Cupiditate deleniti dicta quaerat cum tempore vitae. Aliquid commodi corporis, est culpa eius laborum fuga voluptatem odit iure dicta quos totam, quas tempora quam vitae. Et, porro corrupti? Velit deleniti natus ducimus similique doloremque eveniet dignissimos aliquid minima nobis harum suscipit quos, exercitationem eos praesentium dolor quas! Magnam deleniti fugit ad et consequuntur placeat, incidunt facere doloremque consequatur ut!</p>
            <div className="closebtn btn btn-danger" onClick={openModal}>x</div>
        </div>
    </div>
  )
}

export default Modal