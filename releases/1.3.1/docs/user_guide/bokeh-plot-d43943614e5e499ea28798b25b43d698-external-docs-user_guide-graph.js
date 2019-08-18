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
      };var element = document.getElementById("96bde618-da79-4883-963f-6065081b6082");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '96bde618-da79-4883-963f-6065081b6082' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"b8c6a75a-ac4f-4cdb-9905-7cb2a8d4a4ee":{"roots":{"references":[{"attributes":{},"id":"23927","type":"Selection"},{"attributes":{"graph_layout":{"0":[0.5756040052202561,0.6353073535442918],"1":[0.40507052299841323,0.29802146612440344],"10":[1.1786442037809568,1.0648540260019153],"11":[0.6179412325563839,1.5515185272868746],"12":[0.2754486318164174,1.2884057827444495],"13":[0.0003955689680105006,0.28105451548656746],"14":[-1.4013526478984488,-0.49123372643324004],"15":[-1.2958187694108194,-0.2573519907410127],"16":[2.0,1.470860099837607],"17":[1.041257194758068,0.5202410511335591],"18":[-1.4089018741229613,-0.7338603909553743],"19":[0.23180737399677953,-0.07757053313901932],"2":[-0.1457771709277953,0.11648702887583108],"20":[-1.2770958845469196,-0.9255560331187052],"21":[1.0537379429603781,0.22881103628436603],"22":[-1.1133907307267534,-1.1004706246061668],"23":[-0.40154487667070504,-1.1276288817411717],"24":[0.4116099331869582,-1.1426859965146852],"25":[0.13907133069270605,-1.3394840914246366],"26":[-0.9283436235856021,-1.4817449880778095],"27":[-0.07676199235176083,-0.7961862597552347],"28":[-0.48348581401387175,-0.2636087651737374],"29":[-0.7779046643179712,-1.1879191939825777],"3":[0.20469004030597165,0.7436369063690985],"30":[-0.22557655811378524,-0.24393576023174057],"31":[0.04335027765181154,-0.5093839265905655],"32":[-0.7839638890840174,-0.5725410707353308],"33":[-0.6444978051588894,-0.5567734957068241],"4":[1.0399829552520612,1.3544090178015395],"5":[1.520031878795934,1.0493334123964488],"6":[1.4106286738924758,1.298143255147843],"7":[0.02540424867735827,0.7082778471123438],"8":[-0.344719485777798,0.0572897519147717],"9":[-0.8655402288028349,0.1412846508659197]}},"id":"23911","type":"StaticLayoutProvider"},{"attributes":{"edge_renderer":{"id":"23909","type":"GlyphRenderer"},"inspection_policy":{"id":"23917","type":"NodesOnly"},"layout_provider":{"id":"23911","type":"StaticLayoutProvider"},"node_renderer":{"id":"23905","type":"GlyphRenderer"},"selection_policy":{"id":"23922","type":"NodesOnly"}},"id":"23902","type":"GraphRenderer"},{"attributes":{},"id":"23887","type":"LinearScale"},{"attributes":{},"id":"23929","type":"Selection"},{"attributes":{},"id":"23903","type":"Circle"},{"attributes":{"formatter":{"id":"23925","type":"BasicTickFormatter"},"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23889","type":"LinearAxis"},{"attributes":{},"id":"23930","type":"UnionRenderers"},{"attributes":{},"id":"23925","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23929","type":"Selection"},"selection_policy":{"id":"23930","type":"UnionRenderers"}},"id":"23904","type":"ColumnDataSource"},{"attributes":{},"id":"23890","type":"BasicTicker"},{"attributes":{},"id":"23885","type":"LinearScale"},{"attributes":{"data_source":{"id":"23904","type":"ColumnDataSource"},"glyph":{"id":"23903","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23906","type":"CDSView"}},"id":"23905","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23893","type":"Grid"},{"attributes":{},"id":"23917","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23883","type":"Range1d"},{"attributes":{"source":{"id":"23904","type":"ColumnDataSource"}},"id":"23906","type":"CDSView"},{"attributes":{"formatter":{"id":"23923","type":"BasicTickFormatter"},"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23894","type":"LinearAxis"},{"attributes":{},"id":"23907","type":"MultiLine"},{"attributes":{},"id":"23895","type":"BasicTicker"},{"attributes":{},"id":"23922","type":"NodesOnly"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23927","type":"Selection"},"selection_policy":{"id":"23928","type":"UnionRenderers"}},"id":"23908","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23898","type":"Grid"},{"attributes":{},"id":"23923","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"23908","type":"ColumnDataSource"},"glyph":{"id":"23907","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23910","type":"CDSView"}},"id":"23909","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23899","type":"Toolbar"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23879","type":"Title"},{"attributes":{"below":[{"id":"23889","type":"LinearAxis"}],"center":[{"id":"23893","type":"Grid"},{"id":"23898","type":"Grid"}],"left":[{"id":"23894","type":"LinearAxis"}],"renderers":[{"id":"23902","type":"GraphRenderer"}],"title":{"id":"23879","type":"Title"},"toolbar":{"id":"23899","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23881","type":"Range1d"},"x_scale":{"id":"23885","type":"LinearScale"},"y_range":{"id":"23883","type":"Range1d"},"y_scale":{"id":"23887","type":"LinearScale"}},"id":"23878","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"23908","type":"ColumnDataSource"}},"id":"23910","type":"CDSView"},{"attributes":{},"id":"23928","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23881","type":"Range1d"}],"root_ids":["23878"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"b8c6a75a-ac4f-4cdb-9905-7cb2a8d4a4ee","roots":{"23878":"96bde618-da79-4883-963f-6065081b6082"}}];
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