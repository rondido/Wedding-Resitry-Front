export class AuthTokenRepository {
  #ACCESSTOKEN_KEY = "accessToken";
  #REFRESHTOKEN_KEY = "refreshToken";
  save(accessToken, refreshToken) {
    localStorage.setItem(this.#ACCESSTOKEN_KEY, refreshToken);
    localStorage.setItem(this.#REFRESHTOKEN_KEY, accessToken);
  }
  get() {
    return localStorage.getItem(this.#ACCESSTOKEN_KEY);
  }
  remove() {
    return localStorage.clear();
  }
}
