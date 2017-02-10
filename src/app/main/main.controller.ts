
export class MainController {
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService,  toastr: any) {
    this.classAnimation = '';
    this.creationDate = 1486748168342;
    this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/diogenespolanco/opensaturdayfrontend" target="_blank"><b>OpenSaturday Frontend</b></a>');
    this.classAnimation = '';
  }
}
