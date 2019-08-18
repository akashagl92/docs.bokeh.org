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
      };var element = document.getElementById("e526c0f6-655c-4491-ae96-7860ea3ef5db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e526c0f6-655c-4491-ae96-7860ea3ef5db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"6bf9556e-0d7f-49fa-bfe2-fb2422ca42d7":{"roots":{"references":[{"attributes":{},"id":"4989","type":"UnionRenderers"},{"attributes":{},"id":"4954","type":"BasicTicker"},{"attributes":{},"id":"4944","type":"LinearScale"},{"attributes":{},"id":"4973","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4942","type":"Range1d"},{"attributes":{},"id":"4986","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4957","type":"Grid"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4940","type":"Range1d"},{"attributes":{"source":{"id":"4963","type":"ColumnDataSource"}},"id":"4965","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4958","type":"Toolbar"},{"attributes":{"data_source":{"id":"4963","type":"ColumnDataSource"},"glyph":{"id":"4962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4965","type":"CDSView"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{},"id":"4975","type":"BasicTickFormatter"},{"attributes":{},"id":"4966","type":"MultiLine"},{"attributes":{"source":{"id":"4967","type":"ColumnDataSource"}},"id":"4969","type":"CDSView"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4988","type":"Selection"},"selection_policy":{"id":"4989","type":"UnionRenderers"}},"id":"4963","type":"ColumnDataSource"},{"attributes":{"graph_layout":{"0":[-0.013467340126612966,-0.8043026344088406],"1":[0.4365010071929032,-0.448968869857186],"10":[-0.26326102332112994,-1.5371067160873315],"11":[0.21346860947837723,-1.6857581626644778],"12":[0.27009542891052396,-1.2849370773413276],"13":[0.2729476104074493,-0.19043184318931658],"14":[0.6242893261345186,1.2697380313160251],"15":[0.25758771556945953,1.5171591522056203],"16":[-1.0404178399517838,-2.0],"17":[0.5425708214142007,-1.1037487875147356],"18":[0.7328814843024016,1.0502662134462173],"19":[-0.04301316541743183,-0.1488156982984297],"2":[0.21947270248437767,0.01267244084604804],"20":[0.03774557834514021,1.4299956489469743],"21":[0.7566135108807012,-0.9565458225026588],"22":[0.45744062103622124,1.4170045313796535],"23":[-0.48296396680010323,1.0022987675445034],"24":[-1.050747564069692,0.45289457343874673],"25":[-1.01128314992044,0.7661029734173942],"26":[-0.30915112708125975,1.6225420152890428],"27":[-0.46428013406804075,0.5602711988118604],"28":[-0.1358769662026678,0.42294723630547715],"29":[-0.2665502996667978,1.2995699946276744],"3":[0.29499449869913147,-0.6936407070492255],"30":[0.4709846152772298,0.3492779402314907],"31":[-0.4256366450633631,0.2784772262894972],"32":[0.16864431776391878,0.8956310383407765],"33":[0.09994636873887373,0.7883160260371173],"4":[-0.49499769289435724,-1.287306618598326],"5":[-0.5659441302474271,-1.6449518777922232],"6":[-0.7466544120980524,-1.460806447382713],"7":[0.5819370663335663,-0.6057093683734472],"8":[0.14232363775760967,0.20546676059756794],"9":[0.7338005362025584,0.5123988619885518]}},"id":"4970","type":"StaticLayoutProvider"},{"attributes":{"edge_renderer":{"id":"4968","type":"GlyphRenderer"},"inspection_policy":{"id":"4980","type":"NodesOnly"},"layout_provider":{"id":"4970","type":"StaticLayoutProvider"},"node_renderer":{"id":"4964","type":"GlyphRenderer"},"selection_policy":{"id":"4985","type":"NodesOnly"}},"id":"4961","type":"GraphRenderer"},{"attributes":{},"id":"4962","type":"Circle"},{"attributes":{},"id":"4980","type":"NodesOnly"},{"attributes":{},"id":"4987","type":"UnionRenderers"},{"attributes":{},"id":"4946","type":"LinearScale"},{"attributes":{},"id":"4949","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4967","type":"ColumnDataSource"},"glyph":{"id":"4966","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4969","type":"CDSView"}},"id":"4968","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"4986","type":"Selection"},"selection_policy":{"id":"4987","type":"UnionRenderers"}},"id":"4967","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4973","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4948","type":"LinearAxis"},{"attributes":{"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4952","type":"Grid"},{"attributes":{},"id":"4988","type":"Selection"},{"attributes":{},"id":"4985","type":"NodesOnly"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"4937","type":"Title"},{"attributes":{"below":[{"id":"4948","type":"LinearAxis"}],"left":[{"id":"4953","type":"LinearAxis"}],"renderers":[{"id":"4948","type":"LinearAxis"},{"id":"4952","type":"Grid"},{"id":"4953","type":"LinearAxis"},{"id":"4957","type":"Grid"},{"id":"4961","type":"GraphRenderer"}],"title":{"id":"4937","type":"Title"},"toolbar":{"id":"4958","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4940","type":"Range1d"},"x_scale":{"id":"4944","type":"LinearScale"},"y_range":{"id":"4942","type":"Range1d"},"y_scale":{"id":"4946","type":"LinearScale"}},"id":"4938","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"4975","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4953","type":"LinearAxis"}],"root_ids":["4938"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"6bf9556e-0d7f-49fa-bfe2-fb2422ca42d7","roots":{"4938":"e526c0f6-655c-4491-ae96-7860ea3ef5db"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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