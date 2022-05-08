<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <section class="path-wrap txtOf hLh30">
              <a :href="'/'" title="首页" class="c-999 fsize14">首页</a>
              \
              <a :href="'/article/'" title="" class="c-999 fsize14">文章列表</a>
              \ <span class="c-333 fsize14">{{ article.title }}</span>
            </section>
            <article class="article-infor-box pr20">
              <h3 class="hLh30 txtOf">
                <span class="i-art-title">{{ article.title }}</span>
              </h3>
              <section class="hLh30 txtOf mt5 pb20 mreadnum">
                <div class="fr">
                  <span> <a class="noter-dy vam" title="评论数" href="#i-art-comment">
                    <em class="icon18">&nbsp;</em>(<span class="totalResultComment">{{ article.commentCount }}</span>)
                  </a> <tt title="赞一下" onclick="addPraise('23',3)" class="noter-zan vam ml5 f-fM">
                    <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">{{ article.likeCount }}</span>)
                  </tt>
                  </span>
                </div>
                <div class="fl pt3"><tt class="c-999 f-fM">
                  {{ article.gmtCreate }}</tt>
                </div>
              </section>
              <div id="art-infor-body">
                <p style="margin-top:0px;margin-bottom:29px;padding:0px;line-height:28px;font-family:宋体, Arial, sans-serif;font-size:15.9996px;white-space:normal;text-indent:2em;background-color:#FFFFFF;" v-html="article.articleContent"/>

                <div>
                  <tt class="c-999 f-fM">
                    评论：<span class="totalResultComment">{{ article.commentCount }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    点赞：<span class="addPraise23_3 praiseCount">{{ article.likeCount }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    阅读：<span class="clickNum">{{ article.viewCount }}</span>
                  </tt>
                </div>
              </div>

            </article>
            <!-- 文章评论 开始 -->
            <!--            <div class="mt30 pr20 mb50 commentHtml">-->
            <!--              <div>-->
            <!--                <h6 id="i-art-comment" class="c-c-content c-infor-title">-->
            <!--                  <span class="commentTitle">文章评论（1条）</span>-->
            <!--                </h6>-->
            <!--                <section class="lh-bj-list pr mt20 replyhtml">-->
            <!--                  <ul>-->
            <!--                    <li class="unBr">-->
            <!--                      <aside class="noter-pic">-->
            <!--                        <img width="50" height="50" class="picImg" src="~/assets/photo/customer/avatar-boy.gif">-->
            <!--                      </aside>-->
            <!--                      <div class="of">-->
            <!--                        <section class="n-reply-wrap">-->
            <!--                          <fieldset>-->
            <!--                            <textarea id="commentContent" name="" placeholder="输入您要评论的文字"/>-->
            <!--                          </fieldset>-->
            <!--                          <p class="of mt5 tar pl10 pr10">-->
            <!--                            <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>-->
            <!--                            <a href="javascript:addComment();" title="回复" class="lh-reply-btn">回复</a>-->
            <!--                          </p>-->
            <!--                        </section>-->
            <!--                      </div>-->
            <!--                    </li>-->
            <!--                  </ul>-->
            <!--                </section>-->
            <!--                <section class="">-->
            <!--                  <section class="question-list lh-bj-list pr">-->
            <!--                    <ul class="pr10">-->
            <!--                      <li>-->
            <!--                        <aside class="noter-pic">-->
            <!--                          <img width="50" height="50" class="picImg" src="~/assets/photo/customer/01.jpg">-->
            <!--                        </aside>-->
            <!--                        <div class="of">-->
            <!--                          <span class="fl">-->
            <!--                            <font class="fsize12 c-blue">-->
            <!--                              goddess</font>-->
            <!--                          <font class="fsize12 c-999 ml5">评论：</font></span>-->
            <!--                        </div>-->
            <!--                        <div class="noter-txt mt5">-->
            <!--                          <p>雅思阅读</p>-->
            <!--                        </div>-->
            <!--                        <div class="of mt5">-->
            <!--                          <span class="fr"><font class="fsize12 c-999 ml5">2018/11/04 10:33</font></span> <span class="fl"> <a class="noter-dy vam" title="回复" href="javascript: void(0)" onclick="queryCommentReply('3')">-->
            <!--                            <em class="icon18">&nbsp;</em>(<span class="replyCount3">0</span>)-->
            <!--                          </a> <tt title="赞一下" class="noter-zan vam ml10" onclick="addPraise('3',4)">-->
            <!--                            <em class="icon18">&nbsp;</em>(<span class="addPraise3_4 praiseCount">1</span>)-->
            <!--                          </tt>-->
            <!--                          </span>-->
            <!--                        </div>-->
            <!--                        <div class="n-reply">-->
            <!--                          <section class="n-reply-wrap">-->
            <!--                            <fieldset>-->
            <!--                              <textarea name="" class="commentReplyMsgContent3"/>-->
            <!--                            </fieldset>-->
            <!--                            <p class="of mt5 tar pl10 pr10">-->
            <!--                              <span class="fl"><tt class="c-red commentReplyMsg3"/></span>-->
            <!--                              <a onclick="addCommentReply('3')" class="lh-reply-btn" title="回复" href="javascript: void(0)">回复</a>-->
            <!--                            </p>-->
            <!--                          </section>-->
            <!--                          <div class="mt10 pl10 pr10 pb10 commentReply3"/>-->
            <!--                        </div> &lt;!&ndash; /回复盒子 &ndash;&gt;-->
            <!--                      </li>-->
            <!--                    </ul>-->
            <!--                  </section>-->
            <!--                </section>-->

            <!--                &lt;!&ndash; 公共分页 开始 &ndash;&gt;-->
            <!--                <div>-->
            <!--                  <div class="paging">-->
            <!--                    <a class="undisable" title>首</a>-->
            <!--                    <a id="backpage" class="undisable" href="#" title>&lt;</a>-->
            <!--                    <a href="#" title class="current undisable">1</a>-->
            <!--                    <a href="#" title>2</a>-->
            <!--                    <a id="nextpage" href="#" title>&gt;</a>-->
            <!--                    <a href="#" title>末</a>-->
            <!--                    <div class="clear"/>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                &lt;!&ndash; 公共分页 结束 &ndash;&gt;-->

            <!--              </div>-->
            <!--            </div>-->
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
                    <a href="/article/1" title="雅思阅读能力提高有方法 文章精读可以这样做" class="i-art-title">雅思阅读能力提高有方法 文章精读可以这样做</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span>
                        <a class="noter-dy vam" title="回答" href="/article/1">
                          <em class="icon18">&nbsp;</em>(1)
                        </a>
                        <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('23',3)">
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

  data() {
    return {
      articleId: '',
      article: {}
    }
  },

  created() {
    this.articleId = this.$route.params.id
  },

  mounted() {
    articleApi.getById(this.articleId).then(response => {
      this.article = response.data.article
    })
  }
}
</script>
