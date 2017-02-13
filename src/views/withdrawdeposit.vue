<template>
	<div class="container">

		<header class="bar bar-nav">
			<a href="#" class="button button-link button-nav pull-left back"@click="backaccout()"><span class="icon icon-left"></span></a>
			<h1 class="title">余额提现</h1>
		</header>
		<div class="content">
			<div class="content-padded grid-demo">				

				<div class="list-block" style="margin: 20px 0px !important;">
					<ul>
						<li>
							<div class="item-content">
								<div class="item-media"><i class="icon icon-form-name"></i></div>
								<div class="item-inner">
									<div class="item-title label">可提金额</div>
									<div class="item-input">
										<div class="row">
											<div class="col-50">
												<p class="text-center margin-6" style="color: rgb(255, 87, 34);">¥100.00</p>
											</div>											
										</div>
									</div>
								</div>
							</div>
						</li>		
					</ul>
				</div>

<div class="content-block" style="margin-top: 15px;">
    <p><a href="#" class="button button-big button-fill button-success " style="background: rgb(241,143,106);">确定提现 </a></p>
    
  </div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    backaccout () {
      console.log('submit appointment')
      this.$router.push({ name: 'accountdetailed' })
    }
  }
}
</script>

<style>
	.page{background: #FFF !important;}
	
</style>