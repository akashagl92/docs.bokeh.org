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
      };var element = document.getElementById("8b24489d-a9b5-49b0-8ff1-ec2af4817dbd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8b24489d-a9b5-49b0-8ff1-ec2af4817dbd' but no matching script tag was found. ")
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
                var docs_json = {"2201fe72-e4ed-4f6f-8a47-59f6181f91e3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"126c96c5-e024-4bf5-b274-359718e9273c","type":"PanTool"},{"id":"5fcc2867-8645-48e3-924c-8ad07999f240","type":"WheelZoomTool"},{"id":"8afbfd12-c743-4057-8de4-1bebbd68e013","type":"BoxZoomTool"},{"id":"c0b1c87e-0fa4-4bbf-aa76-3f3bb920a00b","type":"SaveTool"},{"id":"a5b62fe9-0920-4b69-bc06-6cd924dfcffa","type":"ResetTool"},{"id":"2c158a08-80e1-46aa-9f61-23b048fd6d74","type":"HelpTool"}]},"id":"cebebbb7-60a8-41fe-9597-0662984fe891","type":"Toolbar"},{"attributes":{},"id":"0a6bd928-6a2e-4b71-8115-5b12dab51da7","type":"BasicTicker"},{"attributes":{},"id":"db2a0d34-0868-4eb3-93d8-c700632271dc","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"d3f5ed41-0b78-402a-981c-19661b4eac7c","type":"BoxAnnotation"},"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"8afbfd12-c743-4057-8de4-1bebbd68e013","type":"BoxZoomTool"},{"attributes":{},"id":"6f23af11-bfda-4368-9236-ea9b97664535","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9e49388f-d278-420e-93b1-93e34ce8e607","type":"BasicTickFormatter"},"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a6bd928-6a2e-4b71-8115-5b12dab51da7","type":"BasicTicker"}},"id":"df00a3ba-b9e6-4a3d-8e71-171c311d93e4","type":"LinearAxis"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"5fcc2867-8645-48e3-924c-8ad07999f240","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"ae952119-4b25-4229-87ad-bef1fbeab5b0","type":"LinearAxis"}],"left":[{"id":"df00a3ba-b9e6-4a3d-8e71-171c311d93e4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ae952119-4b25-4229-87ad-bef1fbeab5b0","type":"LinearAxis"},{"id":"3d48f9ec-f8d9-4437-9fbc-785db992bb46","type":"Grid"},{"id":"df00a3ba-b9e6-4a3d-8e71-171c311d93e4","type":"LinearAxis"},{"id":"0a56a426-6ce8-48e1-a534-328b443d4e15","type":"Grid"},{"id":"d3f5ed41-0b78-402a-981c-19661b4eac7c","type":"BoxAnnotation"},{"id":"dec806f0-fe25-4546-bfd0-d0cf79cb4929","type":"GlyphRenderer"}],"title":{"id":"272fc198-2992-47d5-92b7-892b963797eb","type":"Title"},"tool_events":{"id":"6f23af11-bfda-4368-9236-ea9b97664535","type":"ToolEvents"},"toolbar":{"id":"cebebbb7-60a8-41fe-9597-0662984fe891","type":"Toolbar"},"x_range":{"id":"dfcdc1b9-e970-44b0-8a0d-4a489dc25a6e","type":"DataRange1d"},"x_scale":{"id":"e2e0a0a7-e308-451c-a208-5582d78acc1d","type":"LinearScale"},"y_range":{"id":"765d9ace-d4ab-4dd3-a8d5-ed5678878ba1","type":"DataRange1d"},"y_scale":{"id":"94335596-ac44-43ce-9073-dc0c6f8e694e","type":"LinearScale"}},"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bce43112-a3f0-42fe-83de-d3eb05451691","type":"BasicTicker"}},"id":"3d48f9ec-f8d9-4437-9fbc-785db992bb46","type":"Grid"},{"attributes":{"bounds":[2,4],"formatter":{"id":"db2a0d34-0868-4eb3-93d8-c700632271dc","type":"BasicTickFormatter"},"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bce43112-a3f0-42fe-83de-d3eb05451691","type":"BasicTicker"}},"id":"ae952119-4b25-4229-87ad-bef1fbeab5b0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dfcdc1b9-e970-44b0-8a0d-4a489dc25a6e","type":"DataRange1d"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"2c158a08-80e1-46aa-9f61-23b048fd6d74","type":"HelpTool"},{"attributes":{},"id":"e2e0a0a7-e308-451c-a208-5582d78acc1d","type":"LinearScale"},{"attributes":{"callback":null},"id":"765d9ace-d4ab-4dd3-a8d5-ed5678878ba1","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0babbc0b-d9d1-423e-88cb-5c57505364d2","type":"Circle"},{"attributes":{},"id":"bce43112-a3f0-42fe-83de-d3eb05451691","type":"BasicTicker"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"c0b1c87e-0fa4-4bbf-aa76-3f3bb920a00b","type":"SaveTool"},{"attributes":{},"id":"94335596-ac44-43ce-9073-dc0c6f8e694e","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"191ffb53-547f-42e1-9736-b765c05a0fd4","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3f5ed41-0b78-402a-981c-19661b4eac7c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"126c96c5-e024-4bf5-b274-359718e9273c","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"af7c2f2f-ad67-452d-a55c-5d2b03a87178","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"}},"id":"a5b62fe9-0920-4b69-bc06-6cd924dfcffa","type":"ResetTool"},{"attributes":{},"id":"9e49388f-d278-420e-93b1-93e34ce8e607","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"272fc198-2992-47d5-92b7-892b963797eb","type":"Title"},{"attributes":{"data_source":{"id":"af7c2f2f-ad67-452d-a55c-5d2b03a87178","type":"ColumnDataSource"},"glyph":{"id":"0babbc0b-d9d1-423e-88cb-5c57505364d2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"191ffb53-547f-42e1-9736-b765c05a0fd4","type":"Circle"},"selection_glyph":null},"id":"dec806f0-fe25-4546-bfd0-d0cf79cb4929","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b6a64f2e-4c15-43ed-baf7-1211464d178a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a6bd928-6a2e-4b71-8115-5b12dab51da7","type":"BasicTicker"}},"id":"0a56a426-6ce8-48e1-a534-328b443d4e15","type":"Grid"}],"root_ids":["b6a64f2e-4c15-43ed-baf7-1211464d178a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"2201fe72-e4ed-4f6f-8a47-59f6181f91e3","elementid":"8b24489d-a9b5-49b0-8ff1-ec2af4817dbd","modelid":"b6a64f2e-4c15-43ed-baf7-1211464d178a"}];
                
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
