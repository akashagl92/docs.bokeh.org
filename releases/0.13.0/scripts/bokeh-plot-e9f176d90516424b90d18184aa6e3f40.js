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
      };var element = document.getElementById("78eeaa7b-00c8-4a24-aafb-0a22edada8f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78eeaa7b-00c8-4a24-aafb-0a22edada8f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"7cf4e4fb-7fcf-413b-866a-b14b756fa40e":{"roots":{"references":[{"attributes":{"data_source":{"id":"9c99235e-e9cc-46cf-8de4-d5d55dbcd569","type":"ColumnDataSource"},"glyph":{"id":"76aab3b9-d92e-415a-ad46-711136ca79a4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f173716-5429-4449-9010-42c3705cd8d9","type":"Circle"},"selection_glyph":null,"view":{"id":"8f6c05cb-933e-4608-9852-ff55b1df248c","type":"CDSView"}},"id":"c122c94d-4fa7-4f54-9c0c-3e4b84ab03c8","type":"GlyphRenderer"},{"attributes":{},"id":"2fda4b34-e013-416f-bce7-383048c55f33","type":"BasicTicker"},{"attributes":{},"id":"13701243-5cd0-44c0-b4f7-42c0e07c3801","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"2db13fe6-db56-4a90-ade7-4514b8a8f5a5","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fda4b34-e013-416f-bce7-383048c55f33","type":"BasicTicker"}},"id":"4c5347d3-6861-43ba-af3a-be11aa6137d9","type":"Grid"},{"attributes":{"toolbar":{"id":"e1c5ca7c-a01d-4f37-9eb0-b9ee06022a99","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"b5093beb-3534-4807-b367-408ad122a750","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"9709b2c8-e2bf-4d57-aaa6-a52bf834fe16","type":"DataRange1d"},{"attributes":{"children":[{"id":"71dea7ed-4607-4ca0-acb5-a1e30f0c290f","type":"Row"}]},"id":"2f5a0e4e-ea2c-458f-9a96-b465db41fbd3","type":"Column"},{"attributes":{},"id":"ed3743e1-02cf-4a97-86b5-5909199eb5ea","type":"HelpTool"},{"attributes":{},"id":"2aa05719-dbba-485f-acb2-6b0766f7cc20","type":"BasicTicker"},{"attributes":{},"id":"4a79520a-c5d9-40cc-8b9b-b8bf28bb2f33","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6efc15a0-eb68-4a19-9e14-b1f77659ebcb","type":"BoxSelectTool"},{"id":"e25f5519-3446-4ea4-bc88-1e549b8b8bcf","type":"LassoSelectTool"},{"id":"a19f49a7-3402-46b1-b15e-9af130785876","type":"HelpTool"}]},"id":"7483b6a8-a468-4f1e-a5d5-ed88cebb77b3","type":"Toolbar"},{"attributes":{"plot":{"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2aa05719-dbba-485f-acb2-6b0766f7cc20","type":"BasicTicker"}},"id":"d4fd141c-9e2f-4ef2-908e-fdb6e4a62060","type":"Grid"},{"attributes":{"formatter":{"id":"0a663456-1d25-47da-8bd4-fb6c8604c35a","type":"BasicTickFormatter"},"plot":{"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2aa05719-dbba-485f-acb2-6b0766f7cc20","type":"BasicTicker"}},"id":"d525ad33-51df-403e-a478-b02fae9ecccd","type":"LinearAxis"},{"attributes":{"below":[{"id":"2da09f72-3f88-4cc2-b04d-df779c9dc66f","type":"LinearAxis"}],"left":[{"id":"12a0b3fd-17d8-4f85-ac10-e9e01a91391b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2da09f72-3f88-4cc2-b04d-df779c9dc66f","type":"LinearAxis"},{"id":"4c5347d3-6861-43ba-af3a-be11aa6137d9","type":"Grid"},{"id":"12a0b3fd-17d8-4f85-ac10-e9e01a91391b","type":"LinearAxis"},{"id":"c2ae8721-7fac-48a4-9155-e65e30d62219","type":"Grid"},{"id":"e19c7154-4f07-4f2a-b3f3-763ad3583c99","type":"BoxAnnotation"},{"id":"597827e0-3a6f-4776-b342-a70787a31917","type":"PolyAnnotation"},{"id":"5ce7ecf3-5ac0-47a8-9768-39399b61074b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7483b6a8-a468-4f1e-a5d5-ed88cebb77b3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f89032d9-4536-435b-bdb3-4433a75e730a","type":"DataRange1d"},"x_scale":{"id":"c6c20d11-bd09-49c7-853e-35f12f9d4327","type":"LinearScale"},"y_range":{"id":"9709b2c8-e2bf-4d57-aaa6-a52bf834fe16","type":"DataRange1d"},"y_scale":{"id":"13701243-5cd0-44c0-b4f7-42c0e07c3801","type":"LinearScale"}},"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6f173716-5429-4449-9010-42c3705cd8d9","type":"Circle"},{"attributes":{},"id":"d0265fda-f59c-4dc7-b6fa-5eac6949959d","type":"BasicTickFormatter"},{"attributes":{},"id":"40fd1452-281d-4197-bc2c-b5f801ef5ab1","type":"Selection"},{"attributes":{"formatter":{"id":"d0265fda-f59c-4dc7-b6fa-5eac6949959d","type":"BasicTickFormatter"},"plot":{"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},"ticker":{"id":"28184401-39cd-47b4-8ae7-98f33cc6bb17","type":"BasicTicker"}},"id":"bdbea088-fb5e-4bfc-9df8-4595629b5ec3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9c99235e-e9cc-46cf-8de4-d5d55dbcd569","type":"ColumnDataSource"},"glyph":{"id":"4d9c2b1e-f26c-417d-ab2d-02ce80dd712b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c1a2e26b-62cc-45a5-9ab3-6e72d19abcc7","type":"Circle"},"selection_glyph":null,"view":{"id":"3137d40f-ef57-4911-9b41-fe8de8592c96","type":"CDSView"}},"id":"5ce7ecf3-5ac0-47a8-9768-39399b61074b","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"12ac9646-ef61-4b36-bcef-acf4f100a554","type":"BoxAnnotation"}},"id":"e7446b9d-df03-415e-8a75-8202b78770a2","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"597827e0-3a6f-4776-b342-a70787a31917","type":"PolyAnnotation"},{"attributes":{},"id":"3173f938-d398-4998-a4b9-90a87a99b5c5","type":"LinearScale"},{"attributes":{"source":{"id":"9c99235e-e9cc-46cf-8de4-d5d55dbcd569","type":"ColumnDataSource"}},"id":"8f6c05cb-933e-4608-9852-ff55b1df248c","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},"ticker":{"id":"28184401-39cd-47b4-8ae7-98f33cc6bb17","type":"BasicTicker"}},"id":"e1834c2e-f975-4e41-a78f-a05968cf91e9","type":"Grid"},{"attributes":{"callback":null},"id":"ccfb2bf2-7d47-482a-abb0-87091dbb7f2f","type":"DataRange1d"},{"attributes":{},"id":"28184401-39cd-47b4-8ae7-98f33cc6bb17","type":"BasicTicker"},{"attributes":{"source":{"id":"9c99235e-e9cc-46cf-8de4-d5d55dbcd569","type":"ColumnDataSource"}},"id":"3137d40f-ef57-4911-9b41-fe8de8592c96","type":"CDSView"},{"attributes":{"children":[{"id":"b5093beb-3534-4807-b367-408ad122a750","type":"ToolbarBox"},{"id":"2f5a0e4e-ea2c-458f-9a96-b465db41fbd3","type":"Column"}]},"id":"3fb390d8-2c9e-42ec-866e-a17e16f7269d","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"2db13fe6-db56-4a90-ade7-4514b8a8f5a5","type":"PolyAnnotation"}},"id":"85cfd511-3415-4e07-baa2-4d4b70461996","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"4d9c2b1e-f26c-417d-ab2d-02ce80dd712b","type":"Circle"},{"attributes":{"callback":null},"id":"e9567ef9-e842-4a8a-9870-275f92b5b700","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"76aab3b9-d92e-415a-ad46-711136ca79a4","type":"Circle"},{"attributes":{},"id":"a19f49a7-3402-46b1-b15e-9af130785876","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7446b9d-df03-415e-8a75-8202b78770a2","type":"BoxSelectTool"},{"id":"85cfd511-3415-4e07-baa2-4d4b70461996","type":"LassoSelectTool"},{"id":"ed3743e1-02cf-4a97-86b5-5909199eb5ea","type":"HelpTool"}]},"id":"36980936-6eda-4a4e-88ae-f2f969b4c7b7","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"597827e0-3a6f-4776-b342-a70787a31917","type":"PolyAnnotation"}},"id":"e25f5519-3446-4ea4-bc88-1e549b8b8bcf","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"d525ad33-51df-403e-a478-b02fae9ecccd","type":"LinearAxis"}],"left":[{"id":"bdbea088-fb5e-4bfc-9df8-4595629b5ec3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d525ad33-51df-403e-a478-b02fae9ecccd","type":"LinearAxis"},{"id":"d4fd141c-9e2f-4ef2-908e-fdb6e4a62060","type":"Grid"},{"id":"bdbea088-fb5e-4bfc-9df8-4595629b5ec3","type":"LinearAxis"},{"id":"e1834c2e-f975-4e41-a78f-a05968cf91e9","type":"Grid"},{"id":"12ac9646-ef61-4b36-bcef-acf4f100a554","type":"BoxAnnotation"},{"id":"2db13fe6-db56-4a90-ade7-4514b8a8f5a5","type":"PolyAnnotation"},{"id":"c122c94d-4fa7-4f54-9c0c-3e4b84ab03c8","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"36980936-6eda-4a4e-88ae-f2f969b4c7b7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ccfb2bf2-7d47-482a-abb0-87091dbb7f2f","type":"DataRange1d"},"x_scale":{"id":"4a79520a-c5d9-40cc-8b9b-b8bf28bb2f33","type":"LinearScale"},"y_range":{"id":"e9567ef9-e842-4a8a-9870-275f92b5b700","type":"DataRange1d"},"y_scale":{"id":"3173f938-d398-4998-a4b9-90a87a99b5c5","type":"LinearScale"}},"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"40fd1452-281d-4197-bc2c-b5f801ef5ab1","type":"Selection"},"selection_policy":{"id":"685e2c30-46df-421c-9fc3-1e0c9b9c10f5","type":"UnionRenderers"}},"id":"9c99235e-e9cc-46cf-8de4-d5d55dbcd569","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"c1a2e26b-62cc-45a5-9ab3-6e72d19abcc7","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"e19c7154-4f07-4f2a-b3f3-763ad3583c99","type":"BoxAnnotation"}},"id":"6efc15a0-eb68-4a19-9e14-b1f77659ebcb","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"f2eee130-3bc5-4433-8891-17f6960ec043","subtype":"Figure","type":"Plot"},{"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"}]},"id":"71dea7ed-4607-4ca0-acb5-a1e30f0c290f","type":"Row"},{"attributes":{},"id":"0a663456-1d25-47da-8bd4-fb6c8604c35a","type":"BasicTickFormatter"},{"attributes":{},"id":"685e2c30-46df-421c-9fc3-1e0c9b9c10f5","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c60765-67be-49a4-9aba-870d68641328","type":"BasicTicker"}},"id":"c2ae8721-7fac-48a4-9155-e65e30d62219","type":"Grid"},{"attributes":{},"id":"a3c524ef-1790-4e5c-b4d4-c5560e478597","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"45034353-878d-4147-b247-99fc58262c77","type":"BasicTickFormatter"},"plot":{"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fda4b34-e013-416f-bce7-383048c55f33","type":"BasicTicker"}},"id":"2da09f72-3f88-4cc2-b04d-df779c9dc66f","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a3c524ef-1790-4e5c-b4d4-c5560e478597","type":"BasicTickFormatter"},"plot":{"id":"f3e5db7a-cd6a-4cf7-9158-3d84e1bebd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c60765-67be-49a4-9aba-870d68641328","type":"BasicTicker"}},"id":"12a0b3fd-17d8-4f85-ac10-e9e01a91391b","type":"LinearAxis"},{"attributes":{},"id":"a8c60765-67be-49a4-9aba-870d68641328","type":"BasicTicker"},{"attributes":{"tools":[{"id":"e7446b9d-df03-415e-8a75-8202b78770a2","type":"BoxSelectTool"},{"id":"85cfd511-3415-4e07-baa2-4d4b70461996","type":"LassoSelectTool"},{"id":"ed3743e1-02cf-4a97-86b5-5909199eb5ea","type":"HelpTool"},{"id":"6efc15a0-eb68-4a19-9e14-b1f77659ebcb","type":"BoxSelectTool"},{"id":"e25f5519-3446-4ea4-bc88-1e549b8b8bcf","type":"LassoSelectTool"},{"id":"a19f49a7-3402-46b1-b15e-9af130785876","type":"HelpTool"}]},"id":"e1c5ca7c-a01d-4f37-9eb0-b9ee06022a99","type":"ProxyToolbar"},{"attributes":{},"id":"45034353-878d-4147-b247-99fc58262c77","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e19c7154-4f07-4f2a-b3f3-763ad3583c99","type":"BoxAnnotation"},{"attributes":{},"id":"c6c20d11-bd09-49c7-853e-35f12f9d4327","type":"LinearScale"},{"attributes":{"callback":null},"id":"f89032d9-4536-435b-bdb3-4433a75e730a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12ac9646-ef61-4b36-bcef-acf4f100a554","type":"BoxAnnotation"}],"root_ids":["3fb390d8-2c9e-42ec-866e-a17e16f7269d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7cf4e4fb-7fcf-413b-866a-b14b756fa40e","roots":{"3fb390d8-2c9e-42ec-866e-a17e16f7269d":"78eeaa7b-00c8-4a24-aafb-0a22edada8f8"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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