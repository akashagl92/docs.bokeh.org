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
      };var element = document.getElementById("3e4d0815-4871-41b8-94d3-1f8ef41998c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e4d0815-4871-41b8-94d3-1f8ef41998c2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"8b95fd92-f59a-459e-ba71-54e74dd0ab82":{"roots":{"references":[{"attributes":{"below":[{"id":"0c453b10-62bf-4830-b24e-6f38f3da3b26","type":"LinearAxis"}],"left":[{"id":"8529a566-6a19-4eaa-9533-657d9fb345aa","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0c453b10-62bf-4830-b24e-6f38f3da3b26","type":"LinearAxis"},{"id":"9f89d696-4e18-4b8e-8c12-9dc06b53bb54","type":"Grid"},{"id":"8529a566-6a19-4eaa-9533-657d9fb345aa","type":"LinearAxis"},{"id":"9e356b28-13be-41d0-89ac-38b7cc030115","type":"Grid"},{"id":"f941e341-0eaa-43f9-b037-7ffa21211251","type":"BoxAnnotation"},{"id":"45f16910-0e1c-410e-9b00-9cd072541557","type":"PolyAnnotation"},{"id":"9832c3f2-921f-4ab5-a969-933ea6cfc5cf","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3055535f-e34f-40f1-b9e5-6694456b432b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3769f33e-ea1b-4088-a705-48f59992741f","type":"DataRange1d"},"x_scale":{"id":"a7d68b74-edcb-4552-8397-b10d25a21136","type":"LinearScale"},"y_range":{"id":"3afb26eb-afb9-41ce-8a11-078dba383bf8","type":"DataRange1d"},"y_scale":{"id":"db4e7516-8d3f-4354-97eb-6e637dfe95d3","type":"LinearScale"}},"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"ee06a30c-186e-485e-9843-d5106bf4b7ba","type":"BasicTickFormatter"},"plot":{"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3104276-8d22-4a02-b032-e8523397b0a2","type":"BasicTicker"}},"id":"9c006f18-f442-49c1-a906-555d2d421cf8","type":"LinearAxis"},{"attributes":{},"id":"f3104276-8d22-4a02-b032-e8523397b0a2","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"ed6e7725-2b46-452c-8b94-02292da34576","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"8df3678f-cc00-4514-bcdf-30bb7db97ec7","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3104276-8d22-4a02-b032-e8523397b0a2","type":"BasicTicker"}},"id":"bf00375c-ca64-4f53-94ac-d4e2021609fe","type":"Grid"},{"attributes":{},"id":"ee06a30c-186e-485e-9843-d5106bf4b7ba","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"8df3678f-cc00-4514-bcdf-30bb7db97ec7","type":"PolyAnnotation"}},"id":"9b673354-6ce8-4507-b099-3e543703507d","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"3769f33e-ea1b-4088-a705-48f59992741f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4debba57-3432-44d1-932a-ab01aa76cc06","type":"BoxSelectTool"},{"id":"a60c85e9-e54e-417c-9c23-1bd61c88d051","type":"LassoSelectTool"},{"id":"06042d10-774f-428c-8612-65277c7adcf4","type":"HoverTool"},{"id":"5e8dc22a-e867-4899-98b9-8256ec9096fa","type":"HelpTool"}]},"id":"3055535f-e34f-40f1-b9e5-6694456b432b","type":"Toolbar"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"22a565e5-75bc-4d98-a259-5d1afe4e9a58","type":"BooleanFilter"},{"attributes":{"children":[{"id":"a33cdfef-bdb9-45cb-922e-6e67ecef5706","type":"Row"}]},"id":"8e2b0f52-a63a-47a4-bc7f-e077e2e9973a","type":"Column"},{"attributes":{"callback":null},"id":"d04df1b3-9d56-46ba-93b3-6791c2a9532a","type":"DataRange1d"},{"attributes":{},"id":"6f8843bb-6c6b-4cb8-a0c8-ecc65b3afa4b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"934f3e13-d28a-4fef-ba15-3673647d64bc","type":"BasicTickFormatter"},"plot":{"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6fd6c99-3922-4b3c-a3bf-e1a732cd739b","type":"BasicTicker"}},"id":"0c453b10-62bf-4830-b24e-6f38f3da3b26","type":"LinearAxis"},{"attributes":{},"id":"06a818fc-2477-4f80-914e-8d76e789f7a6","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f8843bb-6c6b-4cb8-a0c8-ecc65b3afa4b","type":"BasicTicker"}},"id":"9e356b28-13be-41d0-89ac-38b7cc030115","type":"Grid"},{"attributes":{"tools":[{"id":"1214523f-7e89-47ce-8b30-f2ad0233dd04","type":"BoxSelectTool"},{"id":"9b673354-6ce8-4507-b099-3e543703507d","type":"LassoSelectTool"},{"id":"69ce01e9-0314-4ad6-94a2-7f82874f7e2b","type":"HoverTool"},{"id":"73d14a6b-f15a-4609-90cf-b7a8bdcab12d","type":"HelpTool"},{"id":"4debba57-3432-44d1-932a-ab01aa76cc06","type":"BoxSelectTool"},{"id":"a60c85e9-e54e-417c-9c23-1bd61c88d051","type":"LassoSelectTool"},{"id":"06042d10-774f-428c-8612-65277c7adcf4","type":"HoverTool"},{"id":"5e8dc22a-e867-4899-98b9-8256ec9096fa","type":"HelpTool"}]},"id":"601d03e5-ded4-47f2-aaaa-6b74a00b386a","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"52302b68-369c-47f8-bbc6-d2beaa29e069","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"d55cee0c-916d-4fd8-b9b8-16156ecf4587","type":"Circle"},{"attributes":{},"id":"f54dca2d-b262-466b-b8d8-7af24d101c1a","type":"LinearScale"},{"attributes":{},"id":"a7d68b74-edcb-4552-8397-b10d25a21136","type":"LinearScale"},{"attributes":{"data_source":{"id":"a65927d4-f8d8-4025-b328-7111be8070a3","type":"ColumnDataSource"},"glyph":{"id":"d55cee0c-916d-4fd8-b9b8-16156ecf4587","type":"Circle"},"hover_glyph":{"id":"81e73ed0-a9db-4aff-af00-8023e5903c5b","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"67a9f657-da4c-4899-a453-88aca6cfbf12","type":"Circle"},"selection_glyph":null,"view":{"id":"335f182c-ffe3-46b2-8aab-953fb4ff9f89","type":"CDSView"}},"id":"9832c3f2-921f-4ab5-a969-933ea6cfc5cf","type":"GlyphRenderer"},{"attributes":{},"id":"f590477e-d2a0-4ab0-8f28-512cd13a2026","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"389f7d20-dcb4-4ee4-ba52-78e516b8f5b6","type":"BoxAnnotation"},"renderers":[{"id":"1774880e-8bb5-41cd-940a-adc946c0835d","type":"GlyphRenderer"}]},"id":"1214523f-7e89-47ce-8b30-f2ad0233dd04","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"81e73ed0-a9db-4aff-af00-8023e5903c5b","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"f941e341-0eaa-43f9-b037-7ffa21211251","type":"BoxAnnotation"},"renderers":[{"id":"9832c3f2-921f-4ab5-a969-933ea6cfc5cf","type":"GlyphRenderer"}]},"id":"4debba57-3432-44d1-932a-ab01aa76cc06","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1214523f-7e89-47ce-8b30-f2ad0233dd04","type":"BoxSelectTool"},{"id":"9b673354-6ce8-4507-b099-3e543703507d","type":"LassoSelectTool"},{"id":"69ce01e9-0314-4ad6-94a2-7f82874f7e2b","type":"HoverTool"},{"id":"73d14a6b-f15a-4609-90cf-b7a8bdcab12d","type":"HelpTool"}]},"id":"2f7bb2cb-785a-4566-b6ac-8ab6b8395b20","type":"Toolbar"},{"attributes":{"callback":null},"id":"3afb26eb-afb9-41ce-8a11-078dba383bf8","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"45f16910-0e1c-410e-9b00-9cd072541557","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"f27f1a64-7038-4e8c-8e09-95d77f60584c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"10ead14e-afe2-4411-b2f9-b6608fe22f58","type":"Circle"},{"attributes":{"formatter":{"id":"02715363-1ac9-4717-9f1c-cf226ee0c44a","type":"BasicTickFormatter"},"plot":{"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f8843bb-6c6b-4cb8-a0c8-ecc65b3afa4b","type":"BasicTicker"}},"id":"8529a566-6a19-4eaa-9533-657d9fb345aa","type":"LinearAxis"},{"attributes":{},"id":"02715363-1ac9-4717-9f1c-cf226ee0c44a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"69ce01e9-0314-4ad6-94a2-7f82874f7e2b","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"45f16910-0e1c-410e-9b00-9cd072541557","type":"PolyAnnotation"}},"id":"a60c85e9-e54e-417c-9c23-1bd61c88d051","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"06042d10-774f-428c-8612-65277c7adcf4","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a65927d4-f8d8-4025-b328-7111be8070a3","type":"ColumnDataSource"},{"attributes":{"filters":[{"id":"22a565e5-75bc-4d98-a259-5d1afe4e9a58","type":"BooleanFilter"}],"source":{"id":"a65927d4-f8d8-4025-b328-7111be8070a3","type":"ColumnDataSource"}},"id":"335f182c-ffe3-46b2-8aab-953fb4ff9f89","type":"CDSView"},{"attributes":{},"id":"5e8dc22a-e867-4899-98b9-8256ec9096fa","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},"ticker":{"id":"66ae6fd1-4091-42fe-a9c6-2df5ef9112da","type":"BasicTicker"}},"id":"39d310e4-411a-45f1-9958-4e05f21e7d11","type":"Grid"},{"attributes":{"below":[{"id":"9c006f18-f442-49c1-a906-555d2d421cf8","type":"LinearAxis"}],"left":[{"id":"3011a872-980d-4882-ab7a-41ba62f9a547","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9c006f18-f442-49c1-a906-555d2d421cf8","type":"LinearAxis"},{"id":"bf00375c-ca64-4f53-94ac-d4e2021609fe","type":"Grid"},{"id":"3011a872-980d-4882-ab7a-41ba62f9a547","type":"LinearAxis"},{"id":"39d310e4-411a-45f1-9958-4e05f21e7d11","type":"Grid"},{"id":"389f7d20-dcb4-4ee4-ba52-78e516b8f5b6","type":"BoxAnnotation"},{"id":"8df3678f-cc00-4514-bcdf-30bb7db97ec7","type":"PolyAnnotation"},{"id":"1774880e-8bb5-41cd-940a-adc946c0835d","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"2f7bb2cb-785a-4566-b6ac-8ab6b8395b20","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f27f1a64-7038-4e8c-8e09-95d77f60584c","type":"DataRange1d"},"x_scale":{"id":"f54dca2d-b262-466b-b8d8-7af24d101c1a","type":"LinearScale"},"y_range":{"id":"d04df1b3-9d56-46ba-93b3-6791c2a9532a","type":"DataRange1d"},"y_scale":{"id":"f590477e-d2a0-4ab0-8f28-512cd13a2026","type":"LinearScale"}},"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f941e341-0eaa-43f9-b037-7ffa21211251","type":"BoxAnnotation"},{"attributes":{"source":{"id":"a65927d4-f8d8-4025-b328-7111be8070a3","type":"ColumnDataSource"}},"id":"42e79d84-1ff4-49f3-b7f0-5bad6d02d54c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"67a9f657-da4c-4899-a453-88aca6cfbf12","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"389f7d20-dcb4-4ee4-ba52-78e516b8f5b6","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},{"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"}]},"id":"a33cdfef-bdb9-45cb-922e-6e67ecef5706","type":"Row"},{"attributes":{},"id":"73d14a6b-f15a-4609-90cf-b7a8bdcab12d","type":"HelpTool"},{"attributes":{"formatter":{"id":"06a818fc-2477-4f80-914e-8d76e789f7a6","type":"BasicTickFormatter"},"plot":{"id":"f264b6fc-9485-4aac-810c-a222b1facf04","subtype":"Figure","type":"Plot"},"ticker":{"id":"66ae6fd1-4091-42fe-a9c6-2df5ef9112da","type":"BasicTicker"}},"id":"3011a872-980d-4882-ab7a-41ba62f9a547","type":"LinearAxis"},{"attributes":{},"id":"66ae6fd1-4091-42fe-a9c6-2df5ef9112da","type":"BasicTicker"},{"attributes":{},"id":"934f3e13-d28a-4fef-ba15-3673647d64bc","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"601d03e5-ded4-47f2-aaaa-6b74a00b386a","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"2dfec704-dfad-40cc-b53e-4a835fe242d7","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"a65927d4-f8d8-4025-b328-7111be8070a3","type":"ColumnDataSource"},"glyph":{"id":"52302b68-369c-47f8-bbc6-d2beaa29e069","type":"Circle"},"hover_glyph":{"id":"10ead14e-afe2-4411-b2f9-b6608fe22f58","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"ed6e7725-2b46-452c-8b94-02292da34576","type":"Circle"},"selection_glyph":null,"view":{"id":"42e79d84-1ff4-49f3-b7f0-5bad6d02d54c","type":"CDSView"}},"id":"1774880e-8bb5-41cd-940a-adc946c0835d","type":"GlyphRenderer"},{"attributes":{},"id":"b6fd6c99-3922-4b3c-a3bf-e1a732cd739b","type":"BasicTicker"},{"attributes":{"children":[{"id":"2dfec704-dfad-40cc-b53e-4a835fe242d7","type":"ToolbarBox"},{"id":"8e2b0f52-a63a-47a4-bc7f-e077e2e9973a","type":"Column"}]},"id":"81caad83-4362-4915-9fa8-4bee1db2ea04","type":"Column"},{"attributes":{"plot":{"id":"24f99471-e4d1-4ad8-80a0-8954952d317a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6fd6c99-3922-4b3c-a3bf-e1a732cd739b","type":"BasicTicker"}},"id":"9f89d696-4e18-4b8e-8c12-9dc06b53bb54","type":"Grid"},{"attributes":{},"id":"db4e7516-8d3f-4354-97eb-6e637dfe95d3","type":"LinearScale"}],"root_ids":["81caad83-4362-4915-9fa8-4bee1db2ea04"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8b95fd92-f59a-459e-ba71-54e74dd0ab82","elementid":"3e4d0815-4871-41b8-94d3-1f8ef41998c2","modelid":"81caad83-4362-4915-9fa8-4bee1db2ea04"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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