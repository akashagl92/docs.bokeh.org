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
      };var element = document.getElementById("f0d2e3f7-b9f1-49a5-90d3-4f19e1aa6bb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0d2e3f7-b9f1-49a5-90d3-4f19e1aa6bb9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e497d931-6d7f-4379-a434-9c7953036307":{"roots":{"references":[{"attributes":{"source":{"id":"5097","type":"ColumnDataSource"}},"id":"5099","type":"CDSView"},{"attributes":{},"id":"5116","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5085","type":"HoverTool"},{"id":"5086","type":"BoxZoomTool"},{"id":"5087","type":"ResetTool"}]},"id":"5088","type":"Toolbar"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5130","type":"Selection"},"selection_policy":{"id":"5131","type":"UnionRenderers"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5089","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5101","type":"ColumnDataSource"},"glyph":{"id":"5110","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5103","type":"CDSView"}},"id":"5102","type":"GlyphRenderer"},{"attributes":{},"id":"5123","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5080","type":"Range1d"},{"attributes":{"source":{"id":"5101","type":"ColumnDataSource"}},"id":"5103","type":"CDSView"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["index","@index"],["club","@club"]]},"id":"5085","type":"HoverTool"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5079","type":"Range1d"},{"attributes":{"graph_layout":{"0":[-0.31105438995875045,0.2581063601084114],"1":[-0.23024126647464907,0.07651391014708937],"10":[-0.6202890258895261,0.4136181982681939],"11":[-0.4135779376590704,0.6787904526932811],"12":[-0.16945802208053026,0.5757543369820155],"13":[-0.0201590768434851,0.09944488493602631],"14":[0.25136894765255496,-0.6349677639892258],"15":[0.5992835411895516,-0.3409308258799395],"16":[-0.9999999999999999,0.6388272952761466],"17":[-0.3565690275985975,0.40703373081246236],"18":[0.13895593800346684,-0.5915350569999074],"19":[-0.1746950422715799,-0.1007481246839597],"2":[0.032763662359037535,0.0028150780784753403],"20":[0.4582429560836721,-0.5630696994450924],"21":[-0.5346779784843317,0.06322717100146291],"22":[0.3664309930115676,-0.6335713778033918],"23":[0.5528820139817423,-0.17722169901472443],"24":[0.5746054719893261,0.2445485152939864],"25":[0.6523189601376417,0.10345087365458518],"26":[0.6445245130167091,-0.5540651829241776],"27":[0.4323898162848311,0.008867512862623493],"28":[0.2849888847684539,-0.06287308131741065],"29":[0.5336131334957495,-0.41209426393729137],"3":[-0.10180639796174282,0.302075864935261],"30":[0.005549222715456646,-0.24758252444835635],"31":[0.26854327006404116,0.07663163453880541],"32":[0.29036712621307276,-0.3385209241068034],"33":[0.2629733176816256,-0.285691129221127],"4":[-0.7037027884655884,0.3099783825960891],"5":[-0.7742603273753901,0.45370501312214356],"6":[-0.7154030857658052,0.5330001445047778],"7":[-0.20114130820362705,0.1940054011968725],"8":[-0.002161986873022954,-0.1170500273109155],"9":[-0.020604106742802098,-0.38047307992638224]}},"id":"5104","type":"StaticLayoutProvider"},{"attributes":{"edge_renderer":{"id":"5102","type":"GlyphRenderer"},"inspection_policy":{"id":"5123","type":"NodesOnly"},"layout_provider":{"id":"5104","type":"StaticLayoutProvider"},"node_renderer":{"id":"5098","type":"GlyphRenderer"},"selection_policy":{"id":"5128","type":"NodesOnly"}},"id":"5095","type":"GraphRenderer"},{"attributes":{},"id":"5128","type":"NodesOnly"},{"attributes":{"overlay":{"id":"5089","type":"BoxAnnotation"}},"id":"5086","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5105","type":"Circle"},{"attributes":{},"id":"5131","type":"UnionRenderers"},{"attributes":{},"id":"5087","type":"ResetTool"},{"attributes":{},"id":"5130","type":"Selection"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"5132","type":"Selection"},"selection_policy":{"id":"5133","type":"UnionRenderers"}},"id":"5097","type":"ColumnDataSource"},{"attributes":{},"id":"5132","type":"Selection"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"5089","type":"BoxAnnotation"},{"id":"5095","type":"GraphRenderer"}],"title":{"id":"5084","type":"Title"},"toolbar":{"id":"5088","type":"Toolbar"},"x_range":{"id":"5079","type":"Range1d"},"x_scale":{"id":"5117","type":"LinearScale"},"y_range":{"id":"5080","type":"Range1d"},"y_scale":{"id":"5116","type":"LinearScale"}},"id":"5081","type":"Plot"},{"attributes":{"data_source":{"id":"5097","type":"ColumnDataSource"},"glyph":{"id":"5105","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5099","type":"CDSView"}},"id":"5098","type":"GlyphRenderer"},{"attributes":{},"id":"5133","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"5084","type":"Title"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"5110","type":"MultiLine"}],"root_ids":["5081"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"e497d931-6d7f-4379-a434-9c7953036307","roots":{"5081":"f0d2e3f7-b9f1-49a5-90d3-4f19e1aa6bb9"}}];
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