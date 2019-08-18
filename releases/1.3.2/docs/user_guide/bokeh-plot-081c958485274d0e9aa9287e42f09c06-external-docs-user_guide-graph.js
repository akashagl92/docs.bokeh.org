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
      };var element = document.getElementById("9a6947f8-5d7e-4f78-ad2f-13022c5bd0ff");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9a6947f8-5d7e-4f78-ad2f-13022c5bd0ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"362dfedc-4fd4-44fb-bafb-de8a2edc5e7c":{"roots":{"references":[{"attributes":{},"id":"24219","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24208","type":"Circle"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24185","type":"Range1d"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24236","type":"Selection"},"selection_policy":{"id":"24235","type":"UnionRenderers"}},"id":"24204","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24232","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24234","type":"Selection"},"selection_policy":{"id":"24233","type":"UnionRenderers"}},"id":"24200","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"24200","type":"ColumnDataSource"},"glyph":{"id":"24208","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24202","type":"CDSView"}},"id":"24201","type":"GlyphRenderer"},{"attributes":{},"id":"24236","type":"Selection"},{"attributes":{},"id":"24192","type":"ResetTool"},{"attributes":{"data_source":{"id":"24204","type":"ColumnDataSource"},"glyph":{"id":"24213","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24206","type":"CDSView"}},"id":"24205","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24184","type":"Range1d"},{"attributes":{"edge_renderer":{"id":"24205","type":"GlyphRenderer"},"inspection_policy":{"id":"24222","type":"NodesOnly"},"layout_provider":{"id":"24207","type":"StaticLayoutProvider"},"node_renderer":{"id":"24201","type":"GlyphRenderer"},"selection_policy":{"id":"24223","type":"NodesOnly"}},"id":"24198","type":"GraphRenderer"},{"attributes":{},"id":"24220","type":"LinearScale"},{"attributes":{"source":{"id":"24204","type":"ColumnDataSource"}},"id":"24206","type":"CDSView"},{"attributes":{},"id":"24223","type":"NodesOnly"},{"attributes":{},"id":"24235","type":"UnionRenderers"},{"attributes":{},"id":"24222","type":"NodesOnly"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"24213","type":"MultiLine"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24198","type":"GraphRenderer"}],"title":{"id":"24189","type":"Title"},"toolbar":{"id":"24193","type":"Toolbar"},"x_range":{"id":"24184","type":"Range1d"},"x_scale":{"id":"24220","type":"LinearScale"},"y_range":{"id":"24185","type":"Range1d"},"y_scale":{"id":"24219","type":"LinearScale"}},"id":"24186","type":"Plot"},{"attributes":{"overlay":{"id":"24232","type":"BoxAnnotation"}},"id":"24191","type":"BoxZoomTool"},{"attributes":{"graph_layout":{"0":[0.3106824118035171,0.15090340591433424],"1":[0.08681866624749292,0.24649967489181152],"10":[0.6150423930882294,0.15270422726518845],"11":[0.5782871931274264,-0.07356661212994049],"12":[0.4402030306997647,0.39138875886085545],"13":[0.031327117051129894,0.11896992064418158],"14":[-0.6153368662108848,-0.0145460019437488],"15":[-0.5859179048080245,-0.1836302482083691],"16":[1.0,0.21911180781383172],"17":[0.2105710870174658,0.47589668949866215],"18":[-0.5436296000204828,0.06621981504665171],"19":[0.07070491685162825,-0.003294978041896937],"2":[-0.04521636457104778,0.07492962668205827],"20":[-0.6589526773497376,-0.11689306090152662],"21":[0.31220719134932207,0.4251757168831505],"22":[-0.5842398731802816,-0.28449919769923254],"23":[-0.29561403730840474,-0.3962341971958053],"24":[0.03719075628739437,-0.5168524119216639],"25":[-0.09764297689575976,-0.5591384613342932],"26":[-0.5722601608349634,-0.4494421292813171],"27":[-0.12470640661321541,-0.3070374745081318],"28":[-0.1294888300011151,-0.15484351436405805],"29":[-0.4534819502542602,-0.36670160293191095],"3":[0.20550390159796125,0.2565656051250207],"30":[-0.2289349207266281,0.10663098304494045],"31":[-0.01984743102645795,-0.23276364393137103],"32":[-0.3784737739991089,-0.11691435767196372],"33":[-0.3201931227114798,-0.13039637796048592],"4":[0.6178147731004648,0.30830339036856],"5":[0.7454568260860565,0.1362788787036452],"6":[0.7414482873121192,0.2519454260400791],"7":[0.10116706132838459,0.33891147861914656],"8":[-0.10825856562305057,0.01207143830055481],"9":[-0.3422301508134552,0.17424742632304377]}},"id":"24207","type":"StaticLayoutProvider"},{"attributes":{},"id":"24234","type":"Selection"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24189","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24190","type":"HoverTool"},{"id":"24191","type":"BoxZoomTool"},{"id":"24192","type":"ResetTool"}]},"id":"24193","type":"Toolbar"},{"attributes":{"source":{"id":"24200","type":"ColumnDataSource"}},"id":"24202","type":"CDSView"},{"attributes":{},"id":"24233","type":"UnionRenderers"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"24190","type":"HoverTool"}],"root_ids":["24186"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"362dfedc-4fd4-44fb-bafb-de8a2edc5e7c","roots":{"24186":"9a6947f8-5d7e-4f78-ad2f-13022c5bd0ff"}}];
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