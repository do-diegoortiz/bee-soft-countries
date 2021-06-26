import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../interfaces';
import { PostService } from '../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public posts: IPost[] = [];

  public form: FormGroup;

  constructor(private _postService: PostService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(2)]],
      title: ['', []],
      body: ['', []]
    })
  }

  get getId() {
    return this.form.get('id')
  }

  ngOnInit(): void {
    this._postService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
