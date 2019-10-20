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
      };var element = document.getElementById("294ba219-9c9b-4463-a5a7-f72f5c831ff2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '294ba219-9c9b-4463-a5a7-f72f5c831ff2' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"6d372123-59e2-4677-9fae-b9cce30002ad":{"roots":{"references":[{"attributes":{},"id":"23864","type":"LinearScale"},{"attributes":{"source":{"id":"23885","type":"ColumnDataSource"}},"id":"23887","type":"CDSView"},{"attributes":{},"id":"23905","type":"UnionRenderers"},{"attributes":{"edge_renderer":{"id":"23886","type":"GlyphRenderer"},"inspection_policy":{"id":"23890","type":"NodesOnly"},"layout_provider":{"id":"23888","type":"StaticLayoutProvider"},"node_renderer":{"id":"23882","type":"GlyphRenderer"},"selection_policy":{"id":"23895","type":"NodesOnly"}},"id":"23879","type":"GraphRenderer"},{"attributes":{},"id":"23906","type":"Selection"},{"attributes":{"formatter":{"id":"23902","type":"BasicTickFormatter"},"ticker":{"id":"23867","type":"BasicTicker"}},"id":"23866","type":"LinearAxis"},{"attributes":{},"id":"23907","type":"UnionRenderers"},{"attributes":{"below":[{"id":"23866","type":"LinearAxis"}],"center":[{"id":"23870","type":"Grid"},{"id":"23875","type":"Grid"}],"left":[{"id":"23871","type":"LinearAxis"}],"renderers":[{"id":"23879","type":"GraphRenderer"}],"title":{"id":"23856","type":"Title"},"toolbar":{"id":"23876","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23858","type":"Range1d"},"x_scale":{"id":"23862","type":"LinearScale"},"y_range":{"id":"23860","type":"Range1d"},"y_scale":{"id":"23864","type":"LinearScale"}},"id":"23855","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23880","type":"Circle"},{"attributes":{},"id":"23890","type":"NodesOnly"},{"attributes":{},"id":"23867","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23858","type":"Range1d"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23906","type":"Selection"},"selection_policy":{"id":"23907","type":"UnionRenderers"}},"id":"23881","type":"ColumnDataSource"},{"attributes":{},"id":"23904","type":"Selection"},{"attributes":{"ticker":{"id":"23867","type":"BasicTicker"}},"id":"23870","type":"Grid"},{"attributes":{"data_source":{"id":"23881","type":"ColumnDataSource"},"glyph":{"id":"23880","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23883","type":"CDSView"}},"id":"23882","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"23900","type":"BasicTickFormatter"},"ticker":{"id":"23872","type":"BasicTicker"}},"id":"23871","type":"LinearAxis"},{"attributes":{"graph_layout":{"0":[0.6505577620803241,0.2606675778933484],"1":[0.3052416010344899,0.3215567556043255],"10":[1.256890180558292,0.3285410000011924],"11":[0.9695508199136873,0.9542621501690799],"12":[1.0271109389444926,-0.11082886789087876],"13":[0.09241526777919841,0.18629763717866468],"14":[-1.1081548907833456,0.29446074244964826],"15":[-1.1811038992991252,0.10799689770825957],"16":[2.0,0.5115098465450696],"17":[0.4615239995065553,0.8040211043105391],"18":[-0.9036261522475959,0.37249694831188945],"19":[0.0720058315976499,0.054322401835806736],"2":[0.03468270954745041,-0.1586455033066085],"20":[-1.2609299425691942,-0.0694962471092109],"21":[0.6862773816371359,0.6942460542002182],"22":[-1.0755800088017504,-0.4812941083486306],"23":[-0.8398599176794936,-0.6167836275103254],"24":[-0.2757830500115884,-1.0833012873127326],"25":[-0.5654294602241252,-1.0242600651438942],"26":[-1.4199535730554171,-0.4151456947203954],"27":[-0.45060257210504423,-0.681475756685161],"28":[-0.3694263346642534,-0.4528567845997642],"29":[-1.1428177290248545,-0.32821154339634023],"3":[0.5369338814070072,0.030116762243154654],"30":[-0.3901969984789642,0.3073565720531848],"31":[-0.1733713441495194,-0.41591012303947456],"32":[-0.7413828630419713,-0.05901684629622926],"33":[-0.6508467026701865,-0.15838031262208785],"4":[1.2250241544036287,0.6191577472020889],"5":[1.5147085169152334,0.30639916189490357],"6":[1.4844702163038188,0.5317028558562708],"7":[0.5521207019741557,-0.13635121197279185],"8":[-0.1851832439974826,0.13791819314955195],"9":[-0.1352652807992081,-0.6310724286526723]}},"id":"23888","type":"StaticLayoutProvider"},{"attributes":{"source":{"id":"23881","type":"ColumnDataSource"}},"id":"23883","type":"CDSView"},{"attributes":{},"id":"23895","type":"NodesOnly"},{"attributes":{},"id":"23872","type":"BasicTicker"},{"attributes":{},"id":"23884","type":"MultiLine"},{"attributes":{"dimension":1,"ticker":{"id":"23872","type":"BasicTicker"}},"id":"23875","type":"Grid"},{"attributes":{},"id":"23900","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23904","type":"Selection"},"selection_policy":{"id":"23905","type":"UnionRenderers"}},"id":"23885","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23860","type":"Range1d"},{"attributes":{},"id":"23862","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23876","type":"Toolbar"},{"attributes":{"data_source":{"id":"23885","type":"ColumnDataSource"},"glyph":{"id":"23884","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23887","type":"CDSView"}},"id":"23886","type":"GlyphRenderer"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23856","type":"Title"},{"attributes":{},"id":"23902","type":"BasicTickFormatter"}],"root_ids":["23855"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"6d372123-59e2-4677-9fae-b9cce30002ad","roots":{"23855":"294ba219-9c9b-4463-a5a7-f72f5c831ff2"}}];
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