(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("fab8c7ac-cce3-44f7-9ed8-ae3851d16bb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fab8c7ac-cce3-44f7-9ed8-ae3851d16bb9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"6334be69-7e1e-49d2-bfe1-7bd02fc596e9":{"roots":{"references":[{"attributes":{},"id":"4989","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"4973","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4948","type":"LinearAxis"},{"attributes":{},"id":"4986","type":"Selection"},{"attributes":{},"id":"4949","type":"BasicTicker"},{"attributes":{},"id":"4988","type":"Selection"},{"attributes":{},"id":"4954","type":"BasicTicker"},{"attributes":{},"id":"4962","type":"Circle"},{"attributes":{"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4952","type":"Grid"},{"attributes":{"edge_renderer":{"id":"4968","type":"GlyphRenderer"},"inspection_policy":{"id":"4977","type":"NodesOnly"},"layout_provider":{"id":"4970","type":"StaticLayoutProvider"},"node_renderer":{"id":"4964","type":"GlyphRenderer"},"selection_policy":{"id":"4976","type":"NodesOnly"}},"id":"4961","type":"GraphRenderer"},{"attributes":{"formatter":{"id":"4975","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4953","type":"LinearAxis"},{"attributes":{},"id":"4966","type":"MultiLine"},{"attributes":{},"id":"4944","type":"LinearScale"},{"attributes":{},"id":"4977","type":"NodesOnly"},{"attributes":{"below":[{"id":"4948","type":"LinearAxis"}],"left":[{"id":"4953","type":"LinearAxis"}],"renderers":[{"id":"4948","type":"LinearAxis"},{"id":"4952","type":"Grid"},{"id":"4953","type":"LinearAxis"},{"id":"4957","type":"Grid"},{"id":"4961","type":"GraphRenderer"}],"title":{"id":"4937","type":"Title"},"toolbar":{"id":"4958","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4940","type":"Range1d"},"x_scale":{"id":"4944","type":"LinearScale"},"y_range":{"id":"4942","type":"Range1d"},"y_scale":{"id":"4946","type":"LinearScale"}},"id":"4938","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4975","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4957","type":"Grid"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4986","type":"Selection"},"selection_policy":{"id":"4987","type":"UnionRenderers"}},"id":"4963","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4967","type":"ColumnDataSource"}},"id":"4969","type":"CDSView"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"4937","type":"Title"},{"attributes":{"source":{"id":"4963","type":"ColumnDataSource"}},"id":"4965","type":"CDSView"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4942","type":"Range1d"},{"attributes":{"data_source":{"id":"4963","type":"ColumnDataSource"},"glyph":{"id":"4962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4965","type":"CDSView"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4958","type":"Toolbar"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"4988","type":"Selection"},"selection_policy":{"id":"4989","type":"UnionRenderers"}},"id":"4967","type":"ColumnDataSource"},{"attributes":{"graph_layout":{"0":[0.6204775408740533,0.4893286040408652],"1":[0.5805495164464598,0.05509903654431176],"10":[0.8105327625961714,1.1480385530061268],"11":[1.467753764133556,0.7276602617065391],"12":[1.0786593783447989,0.6179153764740005],"13":[0.20073563273990044,0.10893680565960684],"14":[-1.222734236827559,-0.5467069732868766],"15":[-1.0792746988413857,-0.08666871235555018],"16":[0.8171090560960423,2.0],"17":[1.1769279379840671,0.24441915647197485],"18":[-1.207108137533292,-0.3092938355569806],"19":[0.3454811185002902,-0.19484829219983293],"2":[-0.08435405439118912,0.14429061982685068],"20":[-1.1727984816322938,-0.7852646290402998],"21":[1.1310655892527544,-0.004623091862844753],"22":[-0.26763895406516003,-0.9833176109995774],"23":[-0.8234910816384824,-0.8316052249380623],"24":[-0.8890544713641646,-0.9928877992118894],"25":[-0.7237383724759202,-1.250968786978034],"26":[-0.38053425204300523,-1.3384167487368315],"27":[-0.7787288859803841,-0.3711747597714752],"28":[-0.49445617448047297,0.0019748325084759035],"29":[-0.5786554931793255,-1.0414222907347852],"3":[0.558092418356215,0.3350352940802016],"30":[0.04826703128746098,-0.451476868989887],"31":[-0.24868500275712904,-0.46844732819246576],"32":[-0.6282783932829391,-0.49423265019540086],"33":[-0.5063985227123196,-0.44263342576777653],"4":[1.1061385980972827,1.1392387099948875],"5":[0.6433400513798008,1.4319769012681245],"6":[0.8923825484858611,1.4299459707750781],"7":[0.30698770181832813,0.5415607118237498],"8":[-0.046256502378735805,-0.11524162714387778],"9":[-0.652314930809279,0.2938098217816657]}},"id":"4970","type":"StaticLayoutProvider"},{"attributes":{},"id":"4976","type":"NodesOnly"},{"attributes":{},"id":"4973","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4967","type":"ColumnDataSource"},"glyph":{"id":"4966","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4969","type":"CDSView"}},"id":"4968","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4940","type":"Range1d"},{"attributes":{},"id":"4946","type":"LinearScale"},{"attributes":{},"id":"4987","type":"UnionRenderers"}],"root_ids":["4938"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"6334be69-7e1e-49d2-bfe1-7bd02fc596e9","roots":{"4938":"fab8c7ac-cce3-44f7-9ed8-ae3851d16bb9"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();