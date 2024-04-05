#include<bits/stdc++.h>
using namespace std;
int minDays(vector<int>& bloomDay, int m, int k) {
        set<int> s;
        for(int i=0;i<bloomDay.size();i++){
            s.insert(bloomDay[i]);
        }
        // for(auto it=s.begin(); it!=s.end();it++){
        //     cout<<*it<<" ";
        // }

        
    }
int main(){
    vector<int> v{1,10,3,10,5,6,3,3};
    minDays(v, 3,1);
    return 0;
}