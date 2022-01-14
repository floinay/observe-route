#Route Observer

This package help call actions by url.

###Example:

```
@Injectable()
class TeachersPageService {

  @ObserveRoute('/teachers')
  onTeachers() {
    //call action
  }
  
  @ObserveRoute('/teachers/:teacher_id')
  onTeacher({params}:RouteContext) {
    console.log(params.teacher_id);
  }

}
```
