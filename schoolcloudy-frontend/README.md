# SchoolcloudyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Work Progress

## Tuesday 15 August 2017
Created the app's shared modules with these modules created inside it;
	* scclComponents
		** scclAsideModule
		** scclFooterModule
		** scclHeaderModule
	* scclFormModule
	* scclLayoutModule
	* scclLoginModule
	* scclModels
	* scclNotFoundModule
	* scclSharedService
	* scclTableModule
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<nav class="navbar navbar-toggleable-md navbar-light login-navbar">
	<div class="container">
		<a routerLink="/administrator/dashboard" class="sc-logo clearfix"><span>School</span>Cloudy</a>
</div>

	<div class="dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button"
			id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
			aria-expanded="false">Language</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item" href="javascript:void(0)"
				(click)="changeLang('en')">English</a> <a class="dropdown-item"
				href="javascript:void(0)" (click)="changeLang('lv')">Latvia</a> <a
				class="dropdown-item" href="javascript:void(0)"
				(click)="changeLang('fr')">French</a>
		</div>
	</div>
</nav>
<div class="container">
	<div class="row">

		<div
			class="col-md-4 offset-md-2 col-xlg-3 col-xl-3 col-lg-3 col-sm-12">
			<div class="card text-center login-box">
				<div class="card-header">
					<h3 translate>{{'sccl.login.title'}}</h3>
				</div>
				<div class="card-block">
					<div class="auth-main">
						<div class="auth-block">
							<form class="form-horizontal" role="form" #userForm="ngForm"
								(ngSubmit)="(submitUserForm(userForm.value,$event))">
								<div class="field input-group">
									<span class="input-group-addon"><i class="ion-person"></i></span>
									<input type="text" id="fieldUser" class="input" required
										pattern=.*\S.* name="username" ngModel /> <label
										for="fieldUser" class="label" translate>{{'sccl.login.email'}}</label>
								</div>

								<div class="field input-group">
									<span class="input-group-addon"> <i class="ion-locked"></i>
									</span> <input type="password" id="fieldPassword" class="input"
										required pattern=.*\S.* name="password" ngModel /> <label
										for="fieldPassword" class="label" translate>{{'sccl.login.password'}}</label>
								</div>
								<div class="row">
									<div class="col-sm-10 offset-sm-4">
										<button [disabled]="!userForm.valid">
											<div class="button login color">
												<div class="center" translate>{{'sccl.login.sign_in'}}</div>
												<i class="spinner"></i>
											</div>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="row">
	<nav
		class="navbar fixed-bottom navbar-toggleable-xl navbar-inverse login-footer">
		<!-- Brand -->
		<div class="">
			&copy; <a href="http://regosnet.com" translate>{{'general.school_cloudy'}}</a>
			2017
		</div>
	</nav>
</footer>

<button class="button" (click)="myBtn($event)">click</button>


<!-- 

<div class="form-group row">
					<div >
						<button [disabled]="!form.valid" type="submit"
							class="btn btn-default btn-auth" translate>{{'login.sign_in'}}</button>
						<a routerLink="/login" class="forgot-pass" translate>{{'login.forgot_password'}}</a>
					</div>
				</div>
				
				
				
				
				
				<div class="row">
		<div class="col-md-6">
			<div class="jumbotron">
				<h1 class="display-3">SVG WORK HERE</h1>
				<p class="lead">This is a simple hero unit, a simple
					jumbotron-style component for calling extra attention to featured
					content or information.</p>
				<hr class="my-4">
				<p>It uses utility classes for typography and spacing to space
					content out within the larger container.</p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="#" role="button">Learn
						more</a>
				</p>
			</div>
		</div>
		<div class="login-box col-md-4">
			<h3 translate>{{'login.title'}}</h3>
			
		</div>
	</div>

 -->
