(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("87e04f30-0e5a-401c-88d2-0d3776eecb7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87e04f30-0e5a-401c-88d2-0d3776eecb7d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"04777528-a670-4959-87fc-390072cb1623":{"roots":{"references":[{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"46a34a6f-6a13-4ced-973b-e8cd07bd2503","type":"Patches"},{"attributes":{},"id":"8dc10bfc-425c-4651-b12c-9ce2c01424a4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12846111-1239-4a19-a8d4-a86561d46e6a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"ee7a3f34-dad1-4c83-9c7c-1897d1586f2b","type":"DataRange1d"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"bf65083d-1ac8-49ac-9a88-afcf81528126","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a644e7c4-26e2-4182-8db5-6770e6d3bf38","type":"Patches"},{"attributes":{"overlay":{"id":"12846111-1239-4a19-a8d4-a86561d46e6a","type":"BoxAnnotation"},"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"d58fb4f7-1b83-4417-9646-008a383eaeb6","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"902edfc8-fa8a-4e76-aa4b-4f66cf1450cd","type":"Title"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color","line_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"1754fa7a-fb25-4dea-b619-0da5b596ec38","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"80f02756-8b08-4f1f-8901-4713d6195233","type":"HelpTool"},{"attributes":{"formatter":{"id":"81c8e012-8179-4854-9a8e-b15920f830e6","type":"BasicTickFormatter"},"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"efa64131-3e62-496a-8065-c71bd167e3e0","type":"BasicTicker"}},"id":"10fa5386-ad62-452e-a566-f69c2c7b9cd1","type":"LinearAxis"},{"attributes":{},"id":"e0fdd736-cedc-4c81-8d53-fe487fcde700","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bf65083d-1ac8-49ac-9a88-afcf81528126","type":"PanTool"},{"id":"9648db5d-344d-4783-ad15-f378daafe0a3","type":"WheelZoomTool"},{"id":"d58fb4f7-1b83-4417-9646-008a383eaeb6","type":"BoxZoomTool"},{"id":"9487a888-1fc9-4bcf-9598-7e3f70a412db","type":"SaveTool"},{"id":"b3718c1e-759b-4093-ad6e-901222506c7c","type":"ResetTool"},{"id":"80f02756-8b08-4f1f-8901-4713d6195233","type":"HelpTool"}]},"id":"80241744-e518-4476-b0d0-1235c3393797","type":"Toolbar"},{"attributes":{"callback":null},"id":"985ec78f-e38c-4d83-99a3-bdfd8df45682","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1754fa7a-fb25-4dea-b619-0da5b596ec38","type":"ColumnDataSource"},"glyph":{"id":"46a34a6f-6a13-4ced-973b-e8cd07bd2503","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a644e7c4-26e2-4182-8db5-6770e6d3bf38","type":"Patches"},"selection_glyph":null},"id":"81659451-1268-4a5a-aa75-975c1ee3d869","type":"GlyphRenderer"},{"attributes":{},"id":"dec6aeb0-6074-48eb-b2e0-254b9501624e","type":"ToolEvents"},{"attributes":{},"id":"efa64131-3e62-496a-8065-c71bd167e3e0","type":"BasicTicker"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"9648db5d-344d-4783-ad15-f378daafe0a3","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"9487a888-1fc9-4bcf-9598-7e3f70a412db","type":"SaveTool"},{"attributes":{},"id":"81c8e012-8179-4854-9a8e-b15920f830e6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8dc10bfc-425c-4651-b12c-9ce2c01424a4","type":"BasicTickFormatter"},"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"01a6c35f-305f-4f9e-aea2-7f87a1419389","type":"BasicTicker"}},"id":"ac3ebfde-101e-4771-9899-caef4faf507f","type":"LinearAxis"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"01a6c35f-305f-4f9e-aea2-7f87a1419389","type":"BasicTicker"}},"id":"b73ad94b-954b-4542-9507-73ce276c8225","type":"Grid"},{"attributes":{},"id":"cedac2ac-dd3a-46a6-a857-8d0ff7784641","type":"LinearScale"},{"attributes":{},"id":"01a6c35f-305f-4f9e-aea2-7f87a1419389","type":"BasicTicker"},{"attributes":{"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"}},"id":"b3718c1e-759b-4093-ad6e-901222506c7c","type":"ResetTool"},{"attributes":{"below":[{"id":"ac3ebfde-101e-4771-9899-caef4faf507f","type":"LinearAxis"}],"left":[{"id":"10fa5386-ad62-452e-a566-f69c2c7b9cd1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ac3ebfde-101e-4771-9899-caef4faf507f","type":"LinearAxis"},{"id":"b73ad94b-954b-4542-9507-73ce276c8225","type":"Grid"},{"id":"10fa5386-ad62-452e-a566-f69c2c7b9cd1","type":"LinearAxis"},{"id":"0bbde400-f4e2-411c-92a6-75662ec66fc5","type":"Grid"},{"id":"12846111-1239-4a19-a8d4-a86561d46e6a","type":"BoxAnnotation"},{"id":"81659451-1268-4a5a-aa75-975c1ee3d869","type":"GlyphRenderer"}],"title":{"id":"902edfc8-fa8a-4e76-aa4b-4f66cf1450cd","type":"Title"},"tool_events":{"id":"dec6aeb0-6074-48eb-b2e0-254b9501624e","type":"ToolEvents"},"toolbar":{"id":"80241744-e518-4476-b0d0-1235c3393797","type":"Toolbar"},"x_range":{"id":"ee7a3f34-dad1-4c83-9c7c-1897d1586f2b","type":"DataRange1d"},"x_scale":{"id":"cedac2ac-dd3a-46a6-a857-8d0ff7784641","type":"LinearScale"},"y_range":{"id":"985ec78f-e38c-4d83-99a3-bdfd8df45682","type":"DataRange1d"},"y_scale":{"id":"e0fdd736-cedc-4c81-8d53-fe487fcde700","type":"LinearScale"}},"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"efa64131-3e62-496a-8065-c71bd167e3e0","type":"BasicTicker"}},"id":"0bbde400-f4e2-411c-92a6-75662ec66fc5","type":"Grid"}],"root_ids":["ce0d7994-fc23-4d95-8ce8-85284ab92bb2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"04777528-a670-4959-87fc-390072cb1623","elementid":"87e04f30-0e5a-401c-88d2-0d3776eecb7d","modelid":"ce0d7994-fc23-4d95-8ce8-85284ab92bb2"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
