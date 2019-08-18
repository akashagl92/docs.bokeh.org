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
      };var element = document.getElementById("273bb81d-1b50-4193-b7b8-3aeaec4c9199");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '273bb81d-1b50-4193-b7b8-3aeaec4c9199' but no matching script tag was found. ")
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
                    var docs_json = {"5d3acb6c-5c83-424f-8d1f-81d5c852699a":{"roots":{"references":[{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6c5be277-2049-4321-993b-4114d863db2c","type":"BoxSelectTool"},{"id":"b4d15a42-d563-4bd4-9f9b-c777b709d90c","type":"LassoSelectTool"},{"id":"74eefb9b-fc24-4033-902e-2e9af6f41e87","type":"HoverTool"},{"id":"7a16f297-25c9-4114-af46-575385c8e5a7","type":"HelpTool"},{"id":"c57b6c8d-d2d2-40d8-8f35-7ae23a7c10bb","type":"BoxSelectTool"},{"id":"529cd41e-2a94-4fd4-909c-73b5adbbbf50","type":"LassoSelectTool"},{"id":"63da7d5e-a8cc-4159-b3e7-8c106158d819","type":"HoverTool"},{"id":"6d5d43e2-edee-4969-9107-201fd1676d35","type":"HelpTool"}]},"id":"e4dbf3fa-8f07-472a-a2c6-ca7e69d0e789","type":"ToolbarBox"},{"attributes":{},"id":"f22301a7-216c-495f-bd9a-380311cea488","type":"LinearScale"},{"attributes":{},"id":"7772455b-92e2-4464-baf5-71808d92f80f","type":"LinearScale"},{"attributes":{},"id":"73fc4b09-f31f-4673-8909-4ca226a9a1a4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"58ea3b72-e000-458a-b91b-a8cb27cb1410","type":"DataRange1d"},{"attributes":{},"id":"ab71d0da-d905-47f6-b150-3735f4a3c94b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5e7681f-7fc7-492e-81b9-e6c826c9219f","type":"BasicTicker"}},"id":"79962f29-254a-4a37-a207-ab5f1f59669d","type":"Grid"},{"attributes":{"children":[{"id":"2609e4c5-2a8f-4f31-9bec-e47ef196a87b","type":"Row"}]},"id":"f0b1c195-97c3-4d4f-8ec0-6f8f703c7093","type":"Column"},{"attributes":{},"id":"5fa2add2-d4c2-46cc-9d04-c9815b2e3f8a","type":"BasicTickFormatter"},{"attributes":{},"id":"f4a5a288-b6b4-48fc-91e2-7bc829fde78a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"acd278d6-5aa7-4b83-9f3b-f8d7f2479b1a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"941f9d23-7190-4552-be8e-04f3006146b2","type":"DataRange1d"},{"attributes":{},"id":"c5e7681f-7fc7-492e-81b9-e6c826c9219f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"a4737616-face-40d3-9c1b-1b0de7e5ba9b","type":"PolyAnnotation"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"23430f11-c9e1-410b-a17b-8a79880207f7","type":"BooleanFilter"},{"attributes":{"data_source":{"id":"62964ed5-c8e0-490d-b36c-56c69e67db45","type":"ColumnDataSource"},"glyph":{"id":"5df87c97-e77c-44fe-a811-131135b986d1","type":"Circle"},"hover_glyph":{"id":"47983f21-2149-4efb-81eb-acd134323cc4","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"146e8195-19f0-403c-828f-ea232d8eb7da","type":"Circle"},"selection_glyph":null,"view":{"id":"e7c90829-8ea7-48f9-8a5f-7b72d435ed6e","type":"CDSView"}},"id":"9a93e7a4-dc8a-49b8-82bd-75f8ae563568","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"63da7d5e-a8cc-4159-b3e7-8c106158d819","type":"HoverTool"},{"attributes":{},"id":"763715df-e3e0-4d1b-8067-b7120ed2705d","type":"BasicTicker"},{"attributes":{"children":[{"id":"e4dbf3fa-8f07-472a-a2c6-ca7e69d0e789","type":"ToolbarBox"},{"id":"f0b1c195-97c3-4d4f-8ec0-6f8f703c7093","type":"Column"}]},"id":"d77820f6-bfb5-4e02-b5d3-57bb8d01c421","type":"Column"},{"attributes":{"formatter":{"id":"ab71d0da-d905-47f6-b150-3735f4a3c94b","type":"BasicTickFormatter"},"plot":{"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5e7681f-7fc7-492e-81b9-e6c826c9219f","type":"BasicTicker"}},"id":"f79e559a-703c-4faf-af90-7b1290a0c436","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5c65f38-731c-47ac-a2d8-bfc093ac56d5","type":"BasicTicker"}},"id":"f34efe11-602d-409b-90ff-d19c965c5875","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"acd278d6-5aa7-4b83-9f3b-f8d7f2479b1a","type":"BoxAnnotation"},"renderers":[{"id":"9a93e7a4-dc8a-49b8-82bd-75f8ae563568","type":"GlyphRenderer"}]},"id":"c57b6c8d-d2d2-40d8-8f35-7ae23a7c10bb","type":"BoxSelectTool"},{"attributes":{},"id":"f5c65f38-731c-47ac-a2d8-bfc093ac56d5","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"62964ed5-c8e0-490d-b36c-56c69e67db45","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"5df87c97-e77c-44fe-a811-131135b986d1","type":"Circle"},{"attributes":{"source":{"id":"62964ed5-c8e0-490d-b36c-56c69e67db45","type":"ColumnDataSource"}},"id":"0df17760-0fac-4a6c-ba47-2db6459f7547","type":"CDSView"},{"attributes":{"formatter":{"id":"f4a5a288-b6b4-48fc-91e2-7bc829fde78a","type":"BasicTickFormatter"},"plot":{"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5c65f38-731c-47ac-a2d8-bfc093ac56d5","type":"BasicTicker"}},"id":"9b48dddc-2c13-4c02-9812-2b72361acddd","type":"LinearAxis"},{"attributes":{"filters":[{"id":"23430f11-c9e1-410b-a17b-8a79880207f7","type":"BooleanFilter"}],"source":{"id":"62964ed5-c8e0-490d-b36c-56c69e67db45","type":"ColumnDataSource"}},"id":"e7c90829-8ea7-48f9-8a5f-7b72d435ed6e","type":"CDSView"},{"attributes":{"callback":null},"id":"2cd4af90-97fa-4053-bc1f-bea62c8724e7","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"a4737616-face-40d3-9c1b-1b0de7e5ba9b","type":"PolyAnnotation"}},"id":"529cd41e-2a94-4fd4-909c-73b5adbbbf50","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c5be277-2049-4321-993b-4114d863db2c","type":"BoxSelectTool"},{"id":"b4d15a42-d563-4bd4-9f9b-c777b709d90c","type":"LassoSelectTool"},{"id":"74eefb9b-fc24-4033-902e-2e9af6f41e87","type":"HoverTool"},{"id":"7a16f297-25c9-4114-af46-575385c8e5a7","type":"HelpTool"}]},"id":"a4ebbccb-27ed-41c0-a686-4d35f9000290","type":"Toolbar"},{"attributes":{"children":[{"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},{"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"}]},"id":"2609e4c5-2a8f-4f31-9bec-e47ef196a87b","type":"Row"},{"attributes":{"below":[{"id":"f79e559a-703c-4faf-af90-7b1290a0c436","type":"LinearAxis"}],"left":[{"id":"9b48dddc-2c13-4c02-9812-2b72361acddd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f79e559a-703c-4faf-af90-7b1290a0c436","type":"LinearAxis"},{"id":"79962f29-254a-4a37-a207-ab5f1f59669d","type":"Grid"},{"id":"9b48dddc-2c13-4c02-9812-2b72361acddd","type":"LinearAxis"},{"id":"f34efe11-602d-409b-90ff-d19c965c5875","type":"Grid"},{"id":"acd278d6-5aa7-4b83-9f3b-f8d7f2479b1a","type":"BoxAnnotation"},{"id":"a4737616-face-40d3-9c1b-1b0de7e5ba9b","type":"PolyAnnotation"},{"id":"9a93e7a4-dc8a-49b8-82bd-75f8ae563568","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"0e948f35-def7-46ba-82eb-312ca49a6390","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2cd4af90-97fa-4053-bc1f-bea62c8724e7","type":"DataRange1d"},"x_scale":{"id":"f22301a7-216c-495f-bd9a-380311cea488","type":"LinearScale"},"y_range":{"id":"941f9d23-7190-4552-be8e-04f3006146b2","type":"DataRange1d"},"y_scale":{"id":"c3cf8313-071c-424a-9821-aa074261e0fb","type":"LinearScale"}},"id":"aaefc402-d2e5-46e2-9472-9fd941ebc91f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"924886bb-9db8-43e3-bc75-2cd88c2c5491","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"52e7dfbb-8d4e-46ea-9bc6-65c9c749d9a9","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},"ticker":{"id":"763715df-e3e0-4d1b-8067-b7120ed2705d","type":"BasicTicker"}},"id":"f461d1e3-ad09-4627-85ac-f08ea3eabbb3","type":"Grid"},{"attributes":{"formatter":{"id":"5fa2add2-d4c2-46cc-9d04-c9815b2e3f8a","type":"BasicTickFormatter"},"plot":{"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},"ticker":{"id":"763715df-e3e0-4d1b-8067-b7120ed2705d","type":"BasicTicker"}},"id":"65ef1933-ada9-4da9-ad34-1f26d8950fa1","type":"LinearAxis"},{"attributes":{"formatter":{"id":"73fc4b09-f31f-4673-8909-4ca226a9a1a4","type":"BasicTickFormatter"},"plot":{"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},"ticker":{"id":"924886bb-9db8-43e3-bc75-2cd88c2c5491","type":"BasicTicker"}},"id":"2cde3f89-01e0-4d77-aea3-a22c06c3da5b","type":"LinearAxis"},{"attributes":{},"id":"f5672f2a-c507-4442-be35-8fdb282dc666","type":"LinearScale"},{"attributes":{},"id":"c3cf8313-071c-424a-9821-aa074261e0fb","type":"LinearScale"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"abb56212-0404-4251-94b4-164e8a723b23","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"146e8195-19f0-403c-828f-ea232d8eb7da","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},"ticker":{"id":"924886bb-9db8-43e3-bc75-2cd88c2c5491","type":"BasicTicker"}},"id":"9e41733e-a5a3-49aa-a7cd-2e2e20627181","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c57b6c8d-d2d2-40d8-8f35-7ae23a7c10bb","type":"BoxSelectTool"},{"id":"529cd41e-2a94-4fd4-909c-73b5adbbbf50","type":"LassoSelectTool"},{"id":"63da7d5e-a8cc-4159-b3e7-8c106158d819","type":"HoverTool"},{"id":"6d5d43e2-edee-4969-9107-201fd1676d35","type":"HelpTool"}]},"id":"0e948f35-def7-46ba-82eb-312ca49a6390","type":"Toolbar"},{"attributes":{},"id":"7a16f297-25c9-4114-af46-575385c8e5a7","type":"HelpTool"},{"attributes":{"callback":null,"overlay":{"id":"52e7dfbb-8d4e-46ea-9bc6-65c9c749d9a9","type":"PolyAnnotation"}},"id":"b4d15a42-d563-4bd4-9f9b-c777b709d90c","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bd450652-9c15-4db0-ae17-a0d43c9197e6","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"804b8fc9-5a8f-4f1d-a7c1-6eb433e61756","type":"Circle"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"47983f21-2149-4efb-81eb-acd134323cc4","type":"Circle"},{"attributes":{"callback":null},"id":"74eefb9b-fc24-4033-902e-2e9af6f41e87","type":"HoverTool"},{"attributes":{"data_source":{"id":"62964ed5-c8e0-490d-b36c-56c69e67db45","type":"ColumnDataSource"},"glyph":{"id":"804b8fc9-5a8f-4f1d-a7c1-6eb433e61756","type":"Circle"},"hover_glyph":{"id":"abb56212-0404-4251-94b4-164e8a723b23","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"13449bf2-20d7-4987-a822-7a04338a5a05","type":"Circle"},"selection_glyph":null,"view":{"id":"0df17760-0fac-4a6c-ba47-2db6459f7547","type":"CDSView"}},"id":"04bf73fa-d4be-4bc6-a48e-f951c0ef7eff","type":"GlyphRenderer"},{"attributes":{},"id":"6d5d43e2-edee-4969-9107-201fd1676d35","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"13449bf2-20d7-4987-a822-7a04338a5a05","type":"Circle"},{"attributes":{"below":[{"id":"65ef1933-ada9-4da9-ad34-1f26d8950fa1","type":"LinearAxis"}],"left":[{"id":"2cde3f89-01e0-4d77-aea3-a22c06c3da5b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"65ef1933-ada9-4da9-ad34-1f26d8950fa1","type":"LinearAxis"},{"id":"f461d1e3-ad09-4627-85ac-f08ea3eabbb3","type":"Grid"},{"id":"2cde3f89-01e0-4d77-aea3-a22c06c3da5b","type":"LinearAxis"},{"id":"9e41733e-a5a3-49aa-a7cd-2e2e20627181","type":"Grid"},{"id":"bd450652-9c15-4db0-ae17-a0d43c9197e6","type":"BoxAnnotation"},{"id":"52e7dfbb-8d4e-46ea-9bc6-65c9c749d9a9","type":"PolyAnnotation"},{"id":"04bf73fa-d4be-4bc6-a48e-f951c0ef7eff","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a4ebbccb-27ed-41c0-a686-4d35f9000290","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"58ea3b72-e000-458a-b91b-a8cb27cb1410","type":"DataRange1d"},"x_scale":{"id":"7772455b-92e2-4464-baf5-71808d92f80f","type":"LinearScale"},"y_range":{"id":"350f6be1-82ca-4f16-b414-c52693863570","type":"DataRange1d"},"y_scale":{"id":"f5672f2a-c507-4442-be35-8fdb282dc666","type":"LinearScale"}},"id":"f74c8574-07bd-41ea-b1f9-f074a53f0949","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"bd450652-9c15-4db0-ae17-a0d43c9197e6","type":"BoxAnnotation"},"renderers":[{"id":"04bf73fa-d4be-4bc6-a48e-f951c0ef7eff","type":"GlyphRenderer"}]},"id":"6c5be277-2049-4321-993b-4114d863db2c","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"350f6be1-82ca-4f16-b414-c52693863570","type":"DataRange1d"}],"root_ids":["d77820f6-bfb5-4e02-b5d3-57bb8d01c421"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5d3acb6c-5c83-424f-8d1f-81d5c852699a","elementid":"273bb81d-1b50-4193-b7b8-3aeaec4c9199","modelid":"d77820f6-bfb5-4e02-b5d3-57bb8d01c421"}];
                
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
