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
      };var element = document.getElementById("c09fbeea-6b74-4088-bf94-28856ce2c4b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c09fbeea-6b74-4088-bf94-28856ce2c4b1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"3ed92015-f8c8-404a-9442-065d27d179c3":{"roots":{"references":[{"attributes":{"source":{"id":"736dcf7e-ff41-4cd4-b31f-1a39332f6535","type":"ColumnDataSource"}},"id":"f82ba458-6170-4758-b18c-aa7d2f49f2a4","type":"CDSView"},{"attributes":{"data_source":{"id":"0967eb85-9b00-4953-80f7-5ced749cfffd","type":"ColumnDataSource"},"glyph":{"id":"57d9884d-c1f9-43a0-8eb4-e7c2698be0b3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d0b7d3fe-9c42-4670-81a7-40febf39edb7","type":"CDSView"}},"id":"9e2f9078-de21-4860-8a52-770dd49b7d8e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"900e293a-a36c-4842-94c4-a8a80a687c77","subtype":"Figure","type":"Plot"},"ticker":{"id":"72ed008a-510d-4ecc-b016-93ddb7836762","type":"BasicTicker"}},"id":"1e4e039f-da71-4b85-be9b-dd2814ed33f8","type":"Grid"},{"attributes":{},"id":"9fa0e2bd-c7ff-4f86-a95e-775dcf715b1a","type":"MultiLine"},{"attributes":{"formatter":{"id":"dbf20359-9cd7-4349-bd84-23e9c55b116b","type":"BasicTickFormatter"},"plot":{"id":"900e293a-a36c-4842-94c4-a8a80a687c77","subtype":"Figure","type":"Plot"},"ticker":{"id":"72ed008a-510d-4ecc-b016-93ddb7836762","type":"BasicTicker"}},"id":"cb3cd0e8-304b-4921-8532-232d421b01b5","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"2ffae327-d7c1-4d32-96eb-bab57458b9a4","type":"Title"},{"attributes":{},"id":"57d9884d-c1f9-43a0-8eb4-e7c2698be0b3","type":"Circle"},{"attributes":{},"id":"296808b0-1f70-41d3-899a-efaa5652a6b4","type":"BasicTicker"},{"attributes":{},"id":"dbf20359-9cd7-4349-bd84-23e9c55b116b","type":"BasicTickFormatter"},{"attributes":{},"id":"72ed008a-510d-4ecc-b016-93ddb7836762","type":"BasicTicker"},{"attributes":{},"id":"2a629f1a-adcf-4109-9f2e-807a4b977d4e","type":"LinearScale"},{"attributes":{"formatter":{"id":"806d4167-30a6-40c7-b696-06be33b7fca8","type":"BasicTickFormatter"},"plot":{"id":"900e293a-a36c-4842-94c4-a8a80a687c77","subtype":"Figure","type":"Plot"},"ticker":{"id":"296808b0-1f70-41d3-899a-efaa5652a6b4","type":"BasicTicker"}},"id":"89a58989-82b8-4ab6-9eaf-7e003448bae1","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"736dcf7e-ff41-4cd4-b31f-1a39332f6535","type":"ColumnDataSource"},{"attributes":{},"id":"806d4167-30a6-40c7-b696-06be33b7fca8","type":"BasicTickFormatter"},{"attributes":{},"id":"e34b11b9-d3cc-4b0b-90b0-1cea0d7e40a6","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"900e293a-a36c-4842-94c4-a8a80a687c77","subtype":"Figure","type":"Plot"},"ticker":{"id":"296808b0-1f70-41d3-899a-efaa5652a6b4","type":"BasicTicker"}},"id":"0f27ae65-e7a7-44c6-b142-a3e6e5cc2b88","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"34bf4059-e407-49e4-9215-6cf1e1a4f7c2","type":"Toolbar"},{"attributes":{},"id":"6cb20928-9f74-4585-b7c3-30f18151d092","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"dd89f7f7-44cd-46c9-9f83-9e5231aedfe0","type":"Range1d"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"014d404e-6773-40a5-bdee-27bad6e18afb","type":"Range1d"},{"attributes":{"source":{"id":"0967eb85-9b00-4953-80f7-5ced749cfffd","type":"ColumnDataSource"}},"id":"d0b7d3fe-9c42-4670-81a7-40febf39edb7","type":"CDSView"},{"attributes":{"graph_layout":{"0":[0.4971891937257489,-0.3016157347264412],"1":[0.3452453882104052,-0.6094737249301873],"10":[0.93793517270446,0.15497434291223922],"11":[1.0,-0.3171318207771041],"12":[0.7102608301383693,-0.835828780795422],"13":[0.050429142952987505,-0.7313675959865857],"14":[-0.29569605441642666,0.4996631828615268],"15":[-0.9157782808482645,0.1283828444684456],"16":[0.5486616976055199,0.6780191159979165],"17":[0.8938861348111609,-0.6070851819701095],"18":[-0.7092506001813392,-0.5986176641008012],"19":[0.21651951084020382,-0.10982976705302361],"2":[-0.10574261522621098,-0.5587618154609828],"20":[-0.6690513445854215,0.4781602106934708],"21":[0.48607930964638024,-1.0],"22":[-0.49258257835409736,0.5574784804464132],"23":[-1.0,-0.031068993768122888],"24":[-0.9480033171563267,0.2964564491420232],"25":[-0.8298048220725935,0.46763186190508144],"26":[-0.8804962894095161,-0.7392996120337179],"27":[-0.8872113044980816,-0.2412722040845845],"28":[-0.5298675321246851,-0.47250101283293444],"29":[-0.9845073550160881,-0.4013460958202223],"3":[0.31476105472246907,-0.897654719459635],"30":[-0.2435496257825035,-0.4328714240660546],"31":[-0.34177415856509075,0.11001518952565026],"32":[-0.5692660525971469,-0.012403274513151707],"33":[-0.509844030773558,-0.1854371991112569],"4":[0.9889326986077507,-0.025607660733842907],"5":[0.7556483605147131,0.451454366124062],"6":[0.8224761116044981,0.30470031253551744],"7":[0.516603547433798,-0.7754886053929355],"8":[-0.07215051812248907,-0.1714461186558629],"9":[-0.4863455747203945,-0.9220277704789199]}},"id":"5de38a1b-3a1d-4494-9ff3-ba3a6033a683","type":"StaticLayoutProvider"},{"attributes":{"below":[{"id":"cb3cd0e8-304b-4921-8532-232d421b01b5","type":"LinearAxis"}],"left":[{"id":"89a58989-82b8-4ab6-9eaf-7e003448bae1","type":"LinearAxis"}],"renderers":[{"id":"cb3cd0e8-304b-4921-8532-232d421b01b5","type":"LinearAxis"},{"id":"1e4e039f-da71-4b85-be9b-dd2814ed33f8","type":"Grid"},{"id":"89a58989-82b8-4ab6-9eaf-7e003448bae1","type":"LinearAxis"},{"id":"0f27ae65-e7a7-44c6-b142-a3e6e5cc2b88","type":"Grid"},{"id":"914f90ea-a3cd-493f-a286-a8851c6ab1b7","type":"GraphRenderer"}],"title":{"id":"2ffae327-d7c1-4d32-96eb-bab57458b9a4","type":"Title"},"toolbar":{"id":"34bf4059-e407-49e4-9215-6cf1e1a4f7c2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dd89f7f7-44cd-46c9-9f83-9e5231aedfe0","type":"Range1d"},"x_scale":{"id":"2a629f1a-adcf-4109-9f2e-807a4b977d4e","type":"LinearScale"},"y_range":{"id":"014d404e-6773-40a5-bdee-27bad6e18afb","type":"Range1d"},"y_scale":{"id":"e34b11b9-d3cc-4b0b-90b0-1cea0d7e40a6","type":"LinearScale"}},"id":"900e293a-a36c-4842-94c4-a8a80a687c77","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"aa59e199-6c73-49aa-a97b-8b8b1cb99d27","type":"NodesOnly"},{"attributes":{"edge_renderer":{"id":"94aa43a3-6f79-4f1f-a925-0ab432fb7c02","type":"GlyphRenderer"},"inspection_policy":{"id":"aa59e199-6c73-49aa-a97b-8b8b1cb99d27","type":"NodesOnly"},"layout_provider":{"id":"5de38a1b-3a1d-4494-9ff3-ba3a6033a683","type":"StaticLayoutProvider"},"node_renderer":{"id":"9e2f9078-de21-4860-8a52-770dd49b7d8e","type":"GlyphRenderer"},"selection_policy":{"id":"6cb20928-9f74-4585-b7c3-30f18151d092","type":"NodesOnly"}},"id":"914f90ea-a3cd-493f-a286-a8851c6ab1b7","type":"GraphRenderer"},{"attributes":{"data_source":{"id":"736dcf7e-ff41-4cd4-b31f-1a39332f6535","type":"ColumnDataSource"},"glyph":{"id":"9fa0e2bd-c7ff-4f86-a95e-775dcf715b1a","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f82ba458-6170-4758-b18c-aa7d2f49f2a4","type":"CDSView"}},"id":"94aa43a3-6f79-4f1f-a925-0ab432fb7c02","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"0967eb85-9b00-4953-80f7-5ced749cfffd","type":"ColumnDataSource"}],"root_ids":["900e293a-a36c-4842-94c4-a8a80a687c77"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3ed92015-f8c8-404a-9442-065d27d179c3","elementid":"c09fbeea-6b74-4088-bf94-28856ce2c4b1","modelid":"900e293a-a36c-4842-94c4-a8a80a687c77"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
