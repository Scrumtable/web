import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Issue } from "../model/issue.model";

@Injectable()
export class HomeState {
    private issues = new BehaviorSubject<Issue[]>([]);

    getIssues$(): Observable<Issue[]> {
        return this.issues.asObservable();
    }

    setIssues(issues: Issue[]): void {
        this.issues.next(issues);
    }

    updateIssue(issue: Issue): void {
        console.log(issue);
        const values = this.issues.getValue();
        const index = values.findIndex(value => value.name == issue.name);
        values[index] = issue;
        this.issues.next(values);
    }
    getIssue(number: number): Issue {
      const values = this.issues.getValue();
      const index = values.findIndex((value) => value.number == number);
      return values[index]
    }
}
