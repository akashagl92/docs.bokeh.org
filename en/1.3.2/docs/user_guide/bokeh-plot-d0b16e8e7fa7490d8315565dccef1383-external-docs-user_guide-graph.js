(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("22cb1981-b8a9-448d-8311-90afc48ed46f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '22cb1981-b8a9-448d-8311-90afc48ed46f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"9538b84a-4177-4160-b4f1-a282403e2e65":{"roots":{"references":[{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23881","type":"Range1d"},{"attributes":{"edge_renderer":{"id":"23909","type":"GlyphRenderer"},"inspection_policy":{"id":"23913","type":"NodesOnly"},"layout_provider":{"id":"23911","type":"StaticLayoutProvider"},"node_renderer":{"id":"23905","type":"GlyphRenderer"},"selection_policy":{"id":"23914","type":"NodesOnly"}},"id":"23902","type":"GraphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23899","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23898","type":"Grid"},{"attributes":{},"id":"23923","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23928","type":"Selection"},"selection_policy":{"id":"23927","type":"UnionRenderers"}},"id":"23904","type":"ColumnDataSource"},{"attributes":{},"id":"23914","type":"NodesOnly"},{"attributes":{"source":{"id":"23908","type":"ColumnDataSource"}},"id":"23910","type":"CDSView"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23879","type":"Title"},{"attributes":{},"id":"23930","type":"Selection"},{"attributes":{"data_source":{"id":"23904","type":"ColumnDataSource"},"glyph":{"id":"23903","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23906","type":"CDSView"}},"id":"23905","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23883","type":"Range1d"},{"attributes":{},"id":"23925","type":"BasicTickFormatter"},{"attributes":{},"id":"23913","type":"NodesOnly"},{"attributes":{"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23893","type":"Grid"},{"attributes":{"source":{"id":"23904","type":"ColumnDataSource"}},"id":"23906","type":"CDSView"},{"attributes":{"graph_layout":{"0":[-0.40675788036232735,-0.7622204291394886],"1":[-0.22922167968296636,-0.505133340902225],"10":[-1.1050313953052993,-1.1244081752865716],"11":[-0.3768767830313657,-1.7279005097271947],"12":[0.06316905629720124,-1.3847744489017064],"13":[-0.14305641850873124,-0.2110583418520067],"14":[-0.31223145967865434,1.1333232811507972],"15":[0.5804083616874356,1.5021477969116523],"16":[-2.0,-1.3471819234499323],"17":[-0.3585522473462229,-1.2172205278074606],"18":[-0.1372495532867357,1.3482673963070049],"19":[-0.07572041957887367,-0.06643939896733633],"2":[0.27658004138296716,-0.12946164816238506],"20":[0.18483549106065278,1.4569261651957248],"21":[-0.7233171214769226,-0.9397380538322792],"22":[0.7913723195664297,1.2831132633011486],"23":[0.8694049243001324,0.9558444001960578],"24":[1.4031976766803262,0.25390269235437324],"25":[1.3451021549934135,0.6156448516228313],"26":[0.16584481136189314,1.7239342179310346],"27":[0.9176730388455699,0.46987796260980097],"28":[0.7548294479671973,0.27095308374785837],"29":[0.44502585404683553,1.3095279876266466],"3":[0.02165392197100284,-0.7925429196848021],"30":[-0.23313948991731812,0.41502109925613634],"31":[0.5515475259118415,0.176538389555894],"32":[0.24113347878926553,0.8703632320736514],"33":[0.3098045468538972,0.7396357972119671],"4":[-0.996088014633164,-1.450737559491467],"5":[-1.436467907115939,-1.004740061217337],"6":[-1.3652375966642274,-1.283706995175498],"7":[0.23695207765387735,-0.7818925443669362],"8":[-0.09234090058851846,0.20096434915080538],"9":[0.8327541378073261,0.003170911761240536]}},"id":"23911","type":"StaticLayoutProvider"},{"attributes":{"formatter":{"id":"23923","type":"BasicTickFormatter"},"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23889","type":"LinearAxis"},{"attributes":{"data_source":{"id":"23908","type":"ColumnDataSource"},"glyph":{"id":"23907","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23910","type":"CDSView"}},"id":"23909","type":"GlyphRenderer"},{"attributes":{},"id":"23927","type":"UnionRenderers"},{"attributes":{},"id":"23929","type":"UnionRenderers"},{"attributes":{},"id":"23885","type":"LinearScale"},{"attributes":{},"id":"23887","type":"LinearScale"},{"attributes":{},"id":"23890","type":"BasicTicker"},{"attributes":{},"id":"23895","type":"BasicTicker"},{"attributes":{},"id":"23903","type":"Circle"},{"attributes":{"formatter":{"id":"23925","type":"BasicTickFormatter"},"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23894","type":"LinearAxis"},{"attributes":{"below":[{"id":"23889","type":"LinearAxis"}],"center":[{"id":"23893","type":"Grid"},{"id":"23898","type":"Grid"}],"left":[{"id":"23894","type":"LinearAxis"}],"renderers":[{"id":"23902","type":"GraphRenderer"}],"title":{"id":"23879","type":"Title"},"toolbar":{"id":"23899","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23881","type":"Range1d"},"x_scale":{"id":"23885","type":"LinearScale"},"y_range":{"id":"23883","type":"Range1d"},"y_scale":{"id":"23887","type":"LinearScale"}},"id":"23878","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23907","type":"MultiLine"},{"attributes":{},"id":"23928","type":"Selection"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23930","type":"Selection"},"selection_policy":{"id":"23929","type":"UnionRenderers"}},"id":"23908","type":"ColumnDataSource"}],"root_ids":["23878"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"9538b84a-4177-4160-b4f1-a282403e2e65","roots":{"23878":"22cb1981-b8a9-448d-8311-90afc48ed46f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();