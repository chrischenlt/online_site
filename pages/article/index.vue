<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <!-- /无数据提示 开始-->
            <section v-if="articleList.length===0" class="no-data-wrap">
              <em class="icon30 no-data-ico">&nbsp;</em>
              <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
            </section>
            <!-- /无数据提示 结束-->
            <article v-if="articleList.length>0" class="i-article-list">
              <!-- /文章列表 开始-->
              <ul>
                <li v-for="item in articleList" :key="item.id">
                  <aside class="i-article-pic">
                    <img :src="item.cover" alt="">
                  </aside>
                  <h3 class="hLh30 txtOf">
                    <a :href="'/article/'+item.id" class="i-art-title">{{ item.title }}</a>
                  </h3>
                  <section class="i-q-txt mt5 i-q-txt2">
                    <p>
                      <span class="c-999 f-fA">{{ item.introduce }}</span>
                    </p>
                  </section>
                  <section class="hLh30 txtOf mt5 pr10 a-list-extrainfo">
                    <span class="fr"><tt class="c-999 f-fM">{{ item.gmtCreate }}</tt></span>
                    <div class="fl">
                      <span>
                        <a class="noter-dy vam" title="评论">
                          <em class="icon18">&nbsp;</em>(<span>{{ item.commentCount }}</span>)
                        </a>
                        <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                          <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ item.likeCount }}</span>)
                        </tt>
                      </span>
                    </div>
                  </section>
                </li>
              </ul>
              <!-- /文章列表 结束-->
            </article>

            <!-- 公共分页 开始 -->
            <!--            <div>-->
            <!--              <div class="paging">-->
            <!--                <a class="undisable" title>首</a>-->
            <!--                <a id="backpage" class="undisable" href="#" title>&lt;</a>-->
            <!--                <a href="#" title class="current undisable">1</a>-->
            <!--                <a href="#" title>2</a>-->
            <!--                <a id="nextpage" href="#" title>&gt;</a>-->
            <!--                <a href="#" title>末</a>-->
            <!--                <div class="clear"/>-->
            <!--              </div>-->
            <!--            </div>-->
            <!-- 公共分页 结束 -->

          </section>
        </div>

        <aside class="fl col-3 articleRecommend">
          <div>
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章排行榜</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <section class="i-article-list r-art-wrap">
              <ul>
                <li class="lt2">
                  <aside class="orderNum"><span>1</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="雅思阅读能力提高有方法1 文章精读可以这样做" class="i-art-title">雅思阅读能力提高有方法1 文章精读可以这样做</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/23.html">
                        <em class="icon18">&nbsp;</em>(1)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">1</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">2019-02-26 10:31</tt></span>
                  </section>
                </li>
                <li class="lt2">
                  <aside class="orderNum"><span>2</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="雅思阅读能力提高有方法2 文章精读可以这样做" class="i-art-title">雅思阅读能力提高有方法2 文章精读可以这样做</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/23.html">
                        <em class="icon18">&nbsp;</em>(1)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">1</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">2019-02-26 10:31</tt></span>
                  </section>
                </li>
                <li class="lt2">
                  <aside class="orderNum"><span>3</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="雅思阅读能力提高有方法3 文章精读可以这样做" class="i-art-title">雅思阅读能力提高有方法3 文章精读可以这样做</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/23.html">
                        <em class="icon18">&nbsp;</em>(1)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">1</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">2019-02-26 10:31</tt></span>
                  </section>
                </li>
                <li>
                  <aside class="orderNum"><span>4</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="雅思阅读能力提高有方法4 文章精读可以这样做" class="i-art-title">雅思阅读能力提高有方法4 文章精读可以这样做</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/23.html">
                        <em class="icon18">&nbsp;</em>(1)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">1</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">2019-02-26 10:31</tt></span>
                  </section>
                </li>

              </ul>
            </section>
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /文章列表 结束 -->
  </div>
</template>

<script>
import articleApi from '~/api/article'

export default {

  async asyncData() {
    // 文章列表的查询
    const articleListResponse = await articleApi.getList()
    const articleList = articleListResponse.data.articleList

    return {
      articleList // 文章列表
    }
  },
  data() {
  }
}
</script>
