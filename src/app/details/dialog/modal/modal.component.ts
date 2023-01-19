import {Component, Inject, Input, OnInit} from '@angular/core';
import {ModalTrailerService} from "../../../../service/modal-trailer.service";
import {BASE_URL_EMBED} from "../../../constant/components.constant";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() key?: string
  BaseUrlEmbed = BASE_URL_EMBED;

  constructor(private modalTrailerService: ModalTrailerService) { }

  closeModal() {
    this.modalTrailerService.closeModal();
  }
}
