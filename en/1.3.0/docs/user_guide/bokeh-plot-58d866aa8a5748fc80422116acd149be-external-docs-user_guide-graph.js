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
      };var element = document.getElementById("77d650b5-f989-442e-ac5a-d06424cda18e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '77d650b5-f989-442e-ac5a-d06424cda18e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"733fab15-18da-4029-b1d0-ad1d721e792b":{"roots":{"references":[{"attributes":{},"id":"23925","type":"BasicTickFormatter"},{"attributes":{},"id":"23886","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"23894","type":"BasicTicker"}},"id":"23897","type":"Grid"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23927","type":"Selection"},"selection_policy":{"id":"23926","type":"UnionRenderers"}},"id":"23907","type":"ColumnDataSource"},{"attributes":{},"id":"23923","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23898","type":"Toolbar"},{"attributes":{"graph_layout":{"0":[0.5120826799873486,0.5618669492755515],"1":[0.14043033755409245,0.569853783028305],"10":[1.1473849248844605,0.8593274211944849],"11":[0.905282235257126,1.3350527801764822],"12":[0.17762390148680196,1.2859866483164843],"13":[-0.010172041634159367,0.30605635487075566],"14":[-1.1149507062725916,-0.8557594936766157],"15":[-0.2709866421247995,-1.0558805150813477],"16":[2.0,0.9035716610029906],"17":[0.6257237197845374,0.9601345955741789],"18":[-1.1616160674978309,-0.5969463428829579],"19":[0.25952140997096096,0.05399310321700062],"2":[-0.2359302451460403,0.20412815320441585],"20":[-0.048322283149959344,-0.9521410430571394],"21":[0.4097528185405845,1.1286126009588495],"22":[-1.1274020860181517,-0.3311555172549841],"23":[-0.827074331558098,-0.8870329115493215],"24":[-0.7537487916838598,-1.0377673972955024],"25":[-0.6369465664565475,-1.3110561416463196],"26":[-0.30827857667897146,-1.3996650520888345],"27":[-0.7762811645450496,-0.41510401556841425],"28":[0.0875474068987434,-0.379632209288778],"29":[-0.5406424614181703,-1.0943578647003116],"3":[0.04143591686331061,0.8137109316633189],"30":[-0.3911613324207647,0.00452786922245192],"31":[-0.1503379972984898,-0.5303127687324974],"32":[-0.5709016146602108,-0.5573678640844786],"33":[-0.44249116616611955,-0.5020656193182528],"4":[1.2104161280761228,0.5173537294236953],"5":[1.4253745045899548,0.8987752834063834],"6":[1.4716465565430448,0.6488402425976548],"7":[-0.14499484638947174,0.787771358627021],"8":[-0.07970502456906538,-0.06510536560054815],"9":[-0.822278594748737,0.1317866560662831]}},"id":"23910","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23880","type":"Range1d"},{"attributes":{"data_source":{"id":"23907","type":"ColumnDataSource"},"glyph":{"id":"23906","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23909","type":"CDSView"}},"id":"23908","type":"GlyphRenderer"},{"attributes":{},"id":"23926","type":"UnionRenderers"},{"attributes":{},"id":"23884","type":"LinearScale"},{"attributes":{},"id":"23927","type":"Selection"},{"attributes":{"source":{"id":"23907","type":"ColumnDataSource"}},"id":"23909","type":"CDSView"},{"attributes":{"below":[{"id":"23888","type":"LinearAxis"}],"center":[{"id":"23892","type":"Grid"},{"id":"23897","type":"Grid"}],"left":[{"id":"23893","type":"LinearAxis"}],"renderers":[{"id":"23901","type":"GraphRenderer"}],"title":{"id":"23878","type":"Title"},"toolbar":{"id":"23898","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23880","type":"Range1d"},"x_scale":{"id":"23884","type":"LinearScale"},"y_range":{"id":"23882","type":"Range1d"},"y_scale":{"id":"23886","type":"LinearScale"}},"id":"23877","subtype":"Figure","type":"Plot"},{"attributes":{"edge_renderer":{"id":"23908","type":"GlyphRenderer"},"inspection_policy":{"id":"23921","type":"NodesOnly"},"layout_provider":{"id":"23910","type":"StaticLayoutProvider"},"node_renderer":{"id":"23904","type":"GlyphRenderer"},"selection_policy":{"id":"23912","type":"NodesOnly"}},"id":"23901","type":"GraphRenderer"},{"attributes":{},"id":"23928","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"23889","type":"BasicTicker"}},"id":"23892","type":"Grid"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23882","type":"Range1d"},{"attributes":{},"id":"23902","type":"Circle"},{"attributes":{},"id":"23929","type":"Selection"},{"attributes":{},"id":"23912","type":"NodesOnly"},{"attributes":{"formatter":{"id":"23923","type":"BasicTickFormatter"},"ticker":{"id":"23889","type":"BasicTicker"}},"id":"23888","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23929","type":"Selection"},"selection_policy":{"id":"23928","type":"UnionRenderers"}},"id":"23903","type":"ColumnDataSource"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23878","type":"Title"},{"attributes":{},"id":"23889","type":"BasicTicker"},{"attributes":{},"id":"23921","type":"NodesOnly"},{"attributes":{"data_source":{"id":"23903","type":"ColumnDataSource"},"glyph":{"id":"23902","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23905","type":"CDSView"}},"id":"23904","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23903","type":"ColumnDataSource"}},"id":"23905","type":"CDSView"},{"attributes":{"formatter":{"id":"23925","type":"BasicTickFormatter"},"ticker":{"id":"23894","type":"BasicTicker"}},"id":"23893","type":"LinearAxis"},{"attributes":{},"id":"23906","type":"MultiLine"},{"attributes":{},"id":"23894","type":"BasicTicker"}],"root_ids":["23877"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"733fab15-18da-4029-b1d0-ad1d721e792b","roots":{"23877":"77d650b5-f989-442e-ac5a-d06424cda18e"}}];
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