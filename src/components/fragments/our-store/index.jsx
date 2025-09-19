// ** React Imports
import React, { Fragment } from 'react'

// ** Elements Imports
import Head from 'components/elements/head'

// ** Assets Imports
import flower from 'assets/images/flower.png'

const OurStore = () => {
	return (
		<Fragment>
			<img src={flower} className="rotate-180" alt='flower'/>
			<Head title="Journey Of Love" />
			<div className="bg-background w-4/5 rounded-r-3xl shadow-md border-y-8 border-[#545454] my-6" data-aos="fade-right" data-aos-duration="1500">
				<p className="py-4 italic px-4 text-[#545454] break-words text-justify" data-aos="fade-right" data-aos-duration="3000">
					Berawal dari SMK pada tahun 2016, obrolan singkat tanpa saling mengenal.Sebuah kelas yang sama, suatu percakapan
					tentang sampul buku berwarna hijau, memberikan kisah panjang kami, demikian memulai perjalanan penuh suka dan duka
					mengenal satu sama lain, menerima baik buruk dan berkembang bersama.
					<br />
					<br />
					Perjalanan kami tentunya tidak selalu mudah.Kami terpisahkan oleh jarak berulang kali, tak terhitung kapan kami
					dapat berada di tanah yang sama.Mulai dari Palembang - Bandung, lalu Medan - Bandung, Medan - Jakarta, hingga
					Lampung - Jakarta, cinta ini diuji oleh waktu dan ruang.
					<br />
					Namun, tiap jarak tersebut meyakinkan langkah kami, memperkuat cinta kami, hingga kini kami berada di kota yang
					sama: Jakarta.
					<br />
					<br />
					Setelah sembilan tahun perjalanan panjang melewati banyaknya gelombang, kini kami memulai babak baru, sebuah
					perjanjian seumur hidup untuk melanjutkan perjalanan bersama.
					<br />
					Dengan ridho Allah SWT, dengan membangun keluarga yang sakinah, mawadah, dan warahmah hingga akhir hayat.
				</p>
			</div>
			<img src={flower} alt='flower' />
		</Fragment>
	)
}

export default OurStore
