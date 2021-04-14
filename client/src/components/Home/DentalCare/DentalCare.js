import React from 'react';
import dentalCare from '../../../images/dentalCare.png';

const DentalCare = () => {
    return (
        <section className="row mt-5 offset-md-1 mb-5">
            <div className="col-md-5 col-sm-5">
               <img src={dentalCare} alt="" className=" w-75"/>
             </div>
             <div className="col-md-7 mt-4 ms-auto align-self-center">
                <h2>Exceptional Dental Care <br/> On Your Terms</h2>
                <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laborum corrupti magnam ducimus itaque asperiores eius aperiam, laudantium fugit, repellat dignissimos omnis voluptatem fuga ex quo minus nisi repellendus modi?
                Dolore nostrum laborum quas esse odio consequuntur, quidem praesentium rerum veniam quam accusantium debitis! Similique molestias sunt eveniet quod tenetur ex praesentium? Ipsam hic similique quasi a. Minima, adipisci mollitia!
                Ducimus impedit magni sequi aperiam alias atque accusamus, obcaecati incidunt magnam saepe delectus ut nesciunt esse dicta eos? Beatae voluptatum quos harum? At fuga quaerat debitis perspiciatis qui aliquam minima</p>
                <button className="btn button btn-info mt-4">Learn More</button>
             </div>
        </section>
    );
};

export default DentalCare;