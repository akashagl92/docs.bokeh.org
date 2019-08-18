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
      };var element = document.getElementById("b0d378a1-1a58-433f-a49d-1a69b0512f14");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b0d378a1-1a58-433f-a49d-1a69b0512f14' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eb26a7fa-7d83-49ac-a9df-9ee3332dab99":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"24090","type":"BoxAnnotation"}},"id":"24028","type":"BoxSelectTool"},{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":5}},"id":"24069","type":"MultiLine"},{"attributes":{},"id":"24094","type":"Selection"},{"attributes":{"callback":null,"tooltips":null},"id":"24026","type":"HoverTool"},{"attributes":{},"id":"24091","type":"UnionRenderers"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24034","type":"GraphRenderer"}],"title":{"id":"24025","type":"Title"},"toolbar":{"id":"24029","type":"Toolbar"},"x_range":{"id":"24020","type":"Range1d"},"x_scale":{"id":"24080","type":"LinearScale"},"y_range":{"id":"24021","type":"Range1d"},"y_scale":{"id":"24079","type":"LinearScale"}},"id":"24022","type":"Plot"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24020","type":"Range1d"},{"attributes":{},"id":"24093","type":"UnionRenderers"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24025","type":"Title"},{"attributes":{},"id":"24079","type":"LinearScale"},{"attributes":{"callback":null},"id":"24027","type":"TapTool"},{"attributes":{"line_color":{"value":"#fdae61"},"line_width":{"value":5}},"id":"24064","type":"MultiLine"},{"attributes":{"edge_renderer":{"id":"24041","type":"GlyphRenderer"},"inspection_policy":{"id":"24076","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"24043","type":"StaticLayoutProvider"},"node_renderer":{"id":"24037","type":"GlyphRenderer"},"selection_policy":{"id":"24074","type":"NodesAndLinkedEdges"}},"id":"24034","type":"GraphRenderer"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24044","type":"Circle"},{"attributes":{"source":{"id":"24040","type":"ColumnDataSource"}},"id":"24042","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24090","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24092","type":"Selection"},"selection_policy":{"id":"24091","type":"UnionRenderers"}},"id":"24036","type":"ColumnDataSource"},{"attributes":{},"id":"24074","type":"NodesAndLinkedEdges"},{"attributes":{"source":{"id":"24036","type":"ColumnDataSource"}},"id":"24038","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fdae61"},"size":{"units":"screen","value":15}},"id":"24049","type":"Circle"},{"attributes":{"data_source":{"id":"24040","type":"ColumnDataSource"},"glyph":{"id":"24059","type":"MultiLine"},"hover_glyph":{"id":"24069","type":"MultiLine"},"muted_glyph":null,"selection_glyph":{"id":"24064","type":"MultiLine"},"view":{"id":"24042","type":"CDSView"}},"id":"24041","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#CCCCCC"},"line_width":{"value":5}},"id":"24059","type":"MultiLine"},{"attributes":{},"id":"24092","type":"Selection"},{"attributes":{"data_source":{"id":"24036","type":"ColumnDataSource"},"glyph":{"id":"24044","type":"Circle"},"hover_glyph":{"id":"24054","type":"Circle"},"muted_glyph":null,"selection_glyph":{"id":"24049","type":"Circle"},"view":{"id":"24038","type":"CDSView"}},"id":"24037","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24021","type":"Range1d"},{"attributes":{},"id":"24076","type":"EdgesAndLinkedNodes"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24094","type":"Selection"},"selection_policy":{"id":"24093","type":"UnionRenderers"}},"id":"24040","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":15}},"id":"24054","type":"Circle"},{"attributes":{"graph_layout":{"0":[1.0,5.200874811222461e-09],"1":[0.9829730987698075,0.18374951687777052],"10":[-0.2736629534524478,0.9618256731695953],"11":[-0.4457383143150295,0.8951633020694276],"12":[-0.6026346669454482,0.7980172083092125],"13":[-0.7390088423744644,0.6736956880896635],"14":[-0.8502171619409874,0.5264321613022418],"15":[-0.9324721677053746,0.3612417925562752],"16":[-0.9829730970167299,0.1837495317789317],"17":[-0.9999999982469223,-8.222190168562394e-08],"18":[-0.9829730970167299,-0.18374946177253734],"19":[-0.9324722273100193,-0.36124172254988085],"2":[0.932472229063097,0.36124167334698576],"20":[-0.8502171619409874,-0.5264320912958473],"21":[-0.7390089019791091,-0.6736956776879138],"22":[-0.6026347265500929,-0.7980171383028182],"23":[-0.44573837391967425,-0.895163291667678],"24":[-0.27366289384780307,-0.9618256627678456],"25":[-0.0922681605182429,-0.9957342087090403],"26":[0.09226818462306245,-0.9957342087090403],"27":[0.27366292540320325,-0.9618256627678456],"28":[0.44573837567275204,-0.895163291667678],"29":[0.6026347283031706,-0.7980171383028182],"3":[0.8502171040894204,0.5264321613022418],"30":[0.7390087845228973,-0.6736957968972033],"31":[0.8502170444847756,-0.5264322701097816],"32":[0.932472229063097,-0.36124169274755846],"33":[0.9829730987698075,-0.18374944687137618],"4":[0.7390089037321868,0.6736956284850187],"5":[0.6026346686985259,0.7980172083092125],"6":[0.4457383458704297,0.8951633020694276],"7":[0.27366298500784797,0.9618256731695953],"8":[0.09226837088757722,0.9957341595061452],"9":[-0.09226833188159647,0.9957341595061452]}},"id":"24043","type":"StaticLayoutProvider"},{"attributes":{},"id":"24080","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24026","type":"HoverTool"},{"id":"24027","type":"TapTool"},{"id":"24028","type":"BoxSelectTool"}]},"id":"24029","type":"Toolbar"}],"root_ids":["24022"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"eb26a7fa-7d83-49ac-a9df-9ee3332dab99","roots":{"24022":"b0d378a1-1a58-433f-a49d-1a69b0512f14"}}];
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