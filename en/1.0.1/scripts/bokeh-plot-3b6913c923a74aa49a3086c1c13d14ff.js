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
      };var element = document.getElementById("ea715b09-21dd-4931-9111-acebeb652089");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea715b09-21dd-4931-9111-acebeb652089' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f7d91898-52c0-402b-80e6-5906868f4f2b":{"roots":{"references":[{"attributes":{"data_source":{"id":"5097","type":"ColumnDataSource"},"glyph":{"id":"5105","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5099","type":"CDSView"}},"id":"5098","type":"GlyphRenderer"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"data_source":{"id":"5101","type":"ColumnDataSource"},"glyph":{"id":"5110","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5103","type":"CDSView"}},"id":"5102","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5089","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5085","type":"HoverTool"},{"id":"5086","type":"BoxZoomTool"},{"id":"5087","type":"ResetTool"}]},"id":"5088","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5105","type":"Circle"},{"attributes":{},"id":"5133","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["index","@index"],["club","@club"]]},"id":"5085","type":"HoverTool"},{"attributes":{"source":{"id":"5097","type":"ColumnDataSource"}},"id":"5099","type":"CDSView"},{"attributes":{},"id":"5131","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"5089","type":"BoxAnnotation"}},"id":"5086","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"5110","type":"MultiLine"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"5130","type":"Selection"},"selection_policy":{"id":"5131","type":"UnionRenderers"}},"id":"5097","type":"ColumnDataSource"},{"attributes":{"graph_layout":{"0":[-0.18561248725950763,0.3064315567856793],"1":[-0.16194585735419217,0.14421037767704084],"10":[-0.3716257480758148,0.6152119080142137],"11":[-0.5412620174491006,0.4835967197062666],"12":[-0.5079262259931755,0.2379105917464366],"13":[-0.11546540862795697,0.017397092303506324],"14":[0.2777825453022704,-0.55445401039236],"15":[0.01755609575807092,-0.6191772626577103],"16":[-0.2658610212066472,1.0],"17":[-0.057355956730333536,0.43697479742551704],"18":[-0.05661834141317297,-0.5402262101228997],"19":[-0.19023355221066562,-0.054686390328641525],"2":[-0.003645150994279172,-0.006524457065158626],"20":[0.11647937895219397,-0.6225022378407444],"21":[-0.3867950839860951,0.32485017605915284],"22":[0.2162587331608694,-0.643851213369159],"23":[0.42147601756495723,-0.30760655953483806],"24":[0.5565208744445554,0.0216100445785921],"25":[0.5870806867704557,-0.11529849262434558],"26":[0.4288316089249295,-0.6128417901990232],"27":[0.34461352775138226,-0.12881984664020504],"28":[0.18866310985233248,-0.08615143585266401],"29":[0.3916820881802629,-0.46550835063819845],"3":[-0.2739004797114831,0.15044055569215406],"30":[-0.048332797476594844,-0.20738521173086363],"31":[0.25243668975450495,-0.016144278979199633],"32":[0.1520006845152559,-0.37078323163557536],"33":[0.12989010852526192,-0.3241563107971096],"4":[-0.2238907161673162,0.6186927025942864],"5":[-0.29636849243434904,0.7413672773110773],"6":[-0.17918089268970597,0.7480962551433669],"7":[-0.07357450941462337,0.23930894470048908],"8":[0.003803363626615866,-0.097418418138977],"9":[-0.1454807738889061,-0.3125632911901039]}},"id":"5104","type":"StaticLayoutProvider"},{"attributes":{},"id":"5120","type":"NodesOnly"},{"attributes":{"edge_renderer":{"id":"5102","type":"GlyphRenderer"},"inspection_policy":{"id":"5120","type":"NodesOnly"},"layout_provider":{"id":"5104","type":"StaticLayoutProvider"},"node_renderer":{"id":"5098","type":"GlyphRenderer"},"selection_policy":{"id":"5119","type":"NodesOnly"}},"id":"5095","type":"GraphRenderer"},{"attributes":{},"id":"5132","type":"Selection"},{"attributes":{},"id":"5087","type":"ResetTool"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5132","type":"Selection"},"selection_policy":{"id":"5133","type":"UnionRenderers"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{},"id":"5116","type":"LinearScale"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5079","type":"Range1d"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5080","type":"Range1d"},{"attributes":{},"id":"5119","type":"NodesOnly"},{"attributes":{"source":{"id":"5101","type":"ColumnDataSource"}},"id":"5103","type":"CDSView"},{"attributes":{},"id":"5130","type":"Selection"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"5089","type":"BoxAnnotation"},{"id":"5095","type":"GraphRenderer"}],"title":{"id":"5084","type":"Title"},"toolbar":{"id":"5088","type":"Toolbar"},"x_range":{"id":"5079","type":"Range1d"},"x_scale":{"id":"5117","type":"LinearScale"},"y_range":{"id":"5080","type":"Range1d"},"y_scale":{"id":"5116","type":"LinearScale"}},"id":"5081","type":"Plot"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"5084","type":"Title"}],"root_ids":["5081"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"f7d91898-52c0-402b-80e6-5906868f4f2b","roots":{"5081":"ea715b09-21dd-4931-9111-acebeb652089"}}];
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