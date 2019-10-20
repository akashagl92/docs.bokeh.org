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
      };var element = document.getElementById("e5b8cd1c-bcb4-45e8-9285-7743f4e3fd20");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5b8cd1c-bcb4-45e8-9285-7743f4e3fd20' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5f897c1d-b114-4c63-b82d-57fb54ea95bf":{"roots":{"references":[{"attributes":{"source":{"id":"5097","type":"ColumnDataSource"}},"id":"5099","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5085","type":"HoverTool"},{"id":"5086","type":"BoxZoomTool"},{"id":"5087","type":"ResetTool"}]},"id":"5088","type":"Toolbar"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5130","type":"Selection"},"selection_policy":{"id":"5131","type":"UnionRenderers"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5089","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"5110","type":"MultiLine"},{"attributes":{"source":{"id":"5101","type":"ColumnDataSource"}},"id":"5103","type":"CDSView"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"5089","type":"BoxAnnotation"},{"id":"5095","type":"GraphRenderer"}],"title":{"id":"5084","type":"Title"},"toolbar":{"id":"5088","type":"Toolbar"},"x_range":{"id":"5079","type":"Range1d"},"x_scale":{"id":"5117","type":"LinearScale"},"y_range":{"id":"5080","type":"Range1d"},"y_scale":{"id":"5118","type":"LinearScale"}},"id":"5081","type":"Plot"},{"attributes":{"graph_layout":{"0":[0.23902060309501075,-0.30933658956277077],"1":[0.2976353134217298,-0.10032752215823089],"10":[0.29791997206658144,-0.7126720433325191],"11":[0.6909495074793625,-0.3521040587724666],"12":[0.40286194579968204,-0.5151164298126808],"13":[0.061795195785073885,-0.1196416247515255],"14":[-0.4492793778607672,0.5258602992641906],"15":[-0.027689131173555065,0.6115499409543089],"16":[-0.02101007133356291,-1.0],"17":[0.5271364237256249,-0.3076153065402254],"18":[-0.4675420274551213,0.2191565144958579],"19":[0.190010372631502,0.03365739379944417],"2":[-0.025111983783965716,-0.04885210639040002],"20":[0.05379317889799891,0.5107107018825234],"21":[0.5564727138468831,-0.15741590140404566],"22":[-0.13440846211124108,0.5872967651397828],"23":[-0.34836868254491815,0.4777736252530318],"24":[-0.26112020714406625,0.5476624194146436],"25":[-0.22412054978033455,0.6750757229360241],"26":[-0.6355431765656381,0.3117475733150744],"27":[-0.30254154640904163,0.26149156725100703],"28":[-0.22132979213388893,0.05029652161779334],"29":[-0.47976729692126624,0.3862358768302215],"3":[0.15678991515616497,-0.310533515750936],"30":[0.12534971959336924,0.2281355240509451],"31":[-0.052361851203403774,0.23913371284542825],"32":[-0.1605016602207417,0.3536150800020836],"33":[-0.18761567048796945,0.26448118940638154],"4":[0.21535839295365986,-0.6432718905824216],"5":[0.15765632118028766,-0.789387794506311],"6":[0.0616736080154634,-0.7276850848148175],"7":[0.2625330691953657,-0.20575862272612677],"8":[0.037525232325594925,0.07876092119655141],"9":[-0.33616999803987385,-0.06292285854981307]}},"id":"5104","type":"StaticLayoutProvider"},{"attributes":{},"id":"5132","type":"Selection"},{"attributes":{"edge_renderer":{"id":"5102","type":"GlyphRenderer"},"inspection_policy":{"id":"5119","type":"NodesOnly"},"layout_provider":{"id":"5104","type":"StaticLayoutProvider"},"node_renderer":{"id":"5098","type":"GlyphRenderer"},"selection_policy":{"id":"5120","type":"NodesOnly"}},"id":"5095","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5080","type":"Range1d"},{"attributes":{},"id":"5130","type":"Selection"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"5084","type":"Title"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5079","type":"Range1d"},{"attributes":{"data_source":{"id":"5097","type":"ColumnDataSource"},"glyph":{"id":"5105","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5099","type":"CDSView"}},"id":"5098","type":"GlyphRenderer"},{"attributes":{},"id":"5120","type":"NodesOnly"},{"attributes":{},"id":"5131","type":"UnionRenderers"},{"attributes":{},"id":"5119","type":"NodesOnly"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"5085","type":"HoverTool"},{"attributes":{},"id":"5118","type":"LinearScale"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"5132","type":"Selection"},"selection_policy":{"id":"5133","type":"UnionRenderers"}},"id":"5097","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"5089","type":"BoxAnnotation"}},"id":"5086","type":"BoxZoomTool"},{"attributes":{},"id":"5133","type":"UnionRenderers"},{"attributes":{},"id":"5087","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5105","type":"Circle"},{"attributes":{"data_source":{"id":"5101","type":"ColumnDataSource"},"glyph":{"id":"5110","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5103","type":"CDSView"}},"id":"5102","type":"GlyphRenderer"}],"root_ids":["5081"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"5f897c1d-b114-4c63-b82d-57fb54ea95bf","roots":{"5081":"e5b8cd1c-bcb4-45e8-9285-7743f4e3fd20"}}];
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