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
      };var element = document.getElementById("e8378fd2-37c9-40dc-84da-f3a4e62440be");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8378fd2-37c9-40dc-84da-f3a4e62440be' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"e48297f6-b92b-4620-ba04-267077bb59c1":{"roots":{"references":[{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"4937","type":"Title"},{"attributes":{"source":{"id":"4967","type":"ColumnDataSource"}},"id":"4969","type":"CDSView"},{"attributes":{"data_source":{"id":"4963","type":"ColumnDataSource"},"glyph":{"id":"4962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4965","type":"CDSView"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4952","type":"Grid"},{"attributes":{"graph_layout":{"0":[0.7796686231081349,0.43335581905101317],"1":[0.46240882226687047,0.16561374815739446],"10":[1.5717888117044172,0.7452987513445962],"11":[1.6970375118655978,0.2188512341015527],"12":[0.6260843666708708,1.1573231779667643],"13":[0.10030520516375173,0.18244085594254078],"14":[-1.2183873397219052,-0.8503288154238022],"15":[-1.5410732922653247,-0.3845188077365673],"16":[2.0,1.6262613455845913],"17":[1.1764389808182516,0.21050470653890918],"18":[-1.219042915721512,0.2566488531223767],"19":[-0.06004613126375246,0.3874442730050087],"2":[0.04853471642206071,-0.12001937679649731],"20":[-1.526251284661491,-0.13291736324529466],"21":[1.0944220904655508,-0.10542692635953815],"22":[-1.4488555382834165,0.10722249528762696],"23":[-0.8904611425702379,-0.9554146389775119],"24":[-0.07926987250464004,-1.386015552183694],"25":[-0.4450417731720307,-1.3939535683705417],"26":[-1.6796616165504055,-0.8078659396943166],"27":[-0.3935134099497474,-0.8990278789510986],"28":[-0.3960199484512955,-0.49407205070123833],"29":[-1.3467721392081862,-0.6884254909484181],"3":[0.36645474895116753,0.6233859948295647],"30":[-0.47693915573042733,0.15961689135790733],"31":[-0.11967206966811077,-0.5595893564533966],"32":[-0.917071561004444,-0.2605260436923554],"33":[-0.7880150340164964,-0.3250331361394172],"4":[1.2953810690475123,0.9945691525817724],"5":[1.6534729921983433,1.0878256384907272],"6":[1.4433187353808974,1.2829151195384823],"7":[0.5062818452401793,0.4182259078331203],"8":[-0.23025833560432046,0.07236511038260175],"9":[-0.04524595895586131,-0.7667341294428598]}},"id":"4970","type":"StaticLayoutProvider"},{"attributes":{},"id":"4976","type":"NodesOnly"},{"attributes":{"below":[{"id":"4948","type":"LinearAxis"}],"left":[{"id":"4953","type":"LinearAxis"}],"renderers":[{"id":"4948","type":"LinearAxis"},{"id":"4952","type":"Grid"},{"id":"4953","type":"LinearAxis"},{"id":"4957","type":"Grid"},{"id":"4961","type":"GraphRenderer"}],"title":{"id":"4937","type":"Title"},"toolbar":{"id":"4958","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4940","type":"Range1d"},"x_scale":{"id":"4944","type":"LinearScale"},"y_range":{"id":"4942","type":"Range1d"},"y_scale":{"id":"4946","type":"LinearScale"}},"id":"4938","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4987","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"4972","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4953","type":"LinearAxis"},{"attributes":{},"id":"4946","type":"LinearScale"},{"attributes":{},"id":"4989","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4988","type":"Selection"},"selection_policy":{"id":"4989","type":"UnionRenderers"}},"id":"4963","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4957","type":"Grid"},{"attributes":{},"id":"4966","type":"MultiLine"},{"attributes":{},"id":"4944","type":"LinearScale"},{"attributes":{},"id":"4974","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4942","type":"Range1d"},{"attributes":{"data_source":{"id":"4967","type":"ColumnDataSource"},"glyph":{"id":"4966","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4969","type":"CDSView"}},"id":"4968","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4940","type":"Range1d"},{"attributes":{},"id":"4954","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"4986","type":"Selection"},"selection_policy":{"id":"4987","type":"UnionRenderers"}},"id":"4967","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4958","type":"Toolbar"},{"attributes":{},"id":"4972","type":"BasicTickFormatter"},{"attributes":{},"id":"4962","type":"Circle"},{"attributes":{"edge_renderer":{"id":"4968","type":"GlyphRenderer"},"inspection_policy":{"id":"4976","type":"NodesOnly"},"layout_provider":{"id":"4970","type":"StaticLayoutProvider"},"node_renderer":{"id":"4964","type":"GlyphRenderer"},"selection_policy":{"id":"4977","type":"NodesOnly"}},"id":"4961","type":"GraphRenderer"},{"attributes":{},"id":"4977","type":"NodesOnly"},{"attributes":{"formatter":{"id":"4974","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4948","type":"LinearAxis"},{"attributes":{},"id":"4986","type":"Selection"},{"attributes":{},"id":"4988","type":"Selection"},{"attributes":{"source":{"id":"4963","type":"ColumnDataSource"}},"id":"4965","type":"CDSView"},{"attributes":{},"id":"4949","type":"BasicTicker"}],"root_ids":["4938"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e48297f6-b92b-4620-ba04-267077bb59c1","roots":{"4938":"e8378fd2-37c9-40dc-84da-f3a4e62440be"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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