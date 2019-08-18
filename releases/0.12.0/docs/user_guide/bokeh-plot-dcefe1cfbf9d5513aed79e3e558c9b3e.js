document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("c62ff0a3-bfd5-499d-a020-0b95c65ced0b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c62ff0a3-bfd5-499d-a020-0b95c65ced0b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"36b9e613-fc47-42e4-8421-dfdab7ebeac1":{"roots":{"references":[{"attributes":{},"id":"192bff1c-7eb5-4c62-8287-0c0dc00a1301","type":"ToolEvents"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"49b210ce-00f5-4da2-be42-34cc21359762","type":"Range1d"},{"attributes":{"data_source":{"id":"bc2afa38-37d5-4ca9-a95d-126160868e9c","type":"ColumnDataSource"},"glyph":{"id":"0ee69d73-fc63-4f87-baf0-e4037cabcf1e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1cd25ad6-9118-470c-b4b1-8d19c3999dc9","type":"GlyphRenderer"},{"attributes":{},"id":"217834fa-220e-464e-8fed-fa9d5ab5551e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"13ccf2c5-d0db-481b-98aa-39aaff2b0e2f","type":"BoxAnnotation"},"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"f8da0643-0cd4-4631-b94a-6ed7cfdec2d8","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"2121bdd1-930a-4bf4-a4c9-b32facfbf3fb","type":"LinearAxis"}],"height":400,"left":[{"id":"f94c98a9-ab49-4d2c-a5b7-4a2a28966a60","type":"LinearAxis"}],"renderers":[{"id":"13ccf2c5-d0db-481b-98aa-39aaff2b0e2f","type":"BoxAnnotation"},{"id":"1cd25ad6-9118-470c-b4b1-8d19c3999dc9","type":"GlyphRenderer"},{"id":"6e8d7901-6a46-4f38-9089-fda3d6a632ba","type":"Legend"},{"id":"2121bdd1-930a-4bf4-a4c9-b32facfbf3fb","type":"LinearAxis"},{"id":"f94c98a9-ab49-4d2c-a5b7-4a2a28966a60","type":"LinearAxis"},{"id":"e0e6b788-448b-4b72-847e-bb970d3b167a","type":"Grid"},{"id":"95e0e798-0fa5-49e8-9a56-74daed051734","type":"Grid"}],"title":{"id":"43328c04-9353-4d6a-b89b-df8e0d6bf45f","type":"Title"},"tool_events":{"id":"192bff1c-7eb5-4c62-8287-0c0dc00a1301","type":"ToolEvents"},"toolbar":{"id":"5107c7b6-e7d6-4cc4-afab-d51652e26f2f","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"49b210ce-00f5-4da2-be42-34cc21359762","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c01c73b5-4c1e-410c-a471-92b0d6f29b69","type":"Range1d"}},"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"43328c04-9353-4d6a-b89b-df8e0d6bf45f","type":"Title"},{"attributes":{},"id":"0052f818-118c-4831-bfda-9f83400577e4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13ccf2c5-d0db-481b-98aa-39aaff2b0e2f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"328c976d-3f2d-4b87-98b9-e9b286044741","type":"HelpTool"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"c01c73b5-4c1e-410c-a471-92b0d6f29b69","type":"Range1d"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"0052f818-118c-4831-bfda-9f83400577e4","type":"BasicTickFormatter"},"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"},"ticker":{"id":"8a790aeb-3a3a-4b3b-8fc1-fdd712c56aaf","type":"BasicTicker"}},"id":"f94c98a9-ab49-4d2c-a5b7-4a2a28966a60","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"},"ticker":{"id":"8a790aeb-3a3a-4b3b-8fc1-fdd712c56aaf","type":"BasicTicker"}},"id":"95e0e798-0fa5-49e8-9a56-74daed051734","type":"Grid"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"32209716-6ab7-44ca-81f9-ab91082f6cdf","type":"BasicTickFormatter"},"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"},"ticker":{"id":"217834fa-220e-464e-8fed-fa9d5ab5551e","type":"BasicTicker"}},"id":"2121bdd1-930a-4bf4-a4c9-b32facfbf3fb","type":"LinearAxis"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"},"ticker":{"id":"217834fa-220e-464e-8fed-fa9d5ab5551e","type":"BasicTicker"}},"id":"e0e6b788-448b-4b72-847e-bb970d3b167a","type":"Grid"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"f4695add-7432-40c4-b896-4b535e2a5e7a","type":"SaveTool"},{"attributes":{"location":"top_left","plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"6e8d7901-6a46-4f38-9089-fda3d6a632ba","type":"Legend"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"08209a52-8aa5-48b5-86c6-eb6127378b58","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"5a4112cd-7775-47d8-a2ff-6248534020f4","type":"ResetTool"},{"attributes":{"plot":{"id":"54a107df-47e2-4e9a-a5a1-155db7e43305","subtype":"Chart","type":"Plot"}},"id":"6fa25d5e-39c5-4652-8d39-61a090c6f437","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[21.5,23.7,18.0,19.0,30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0,36.4,20.3,25.4,18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0,14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"bc2afa38-37d5-4ca9-a95d-126160868e9c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6fa25d5e-39c5-4652-8d39-61a090c6f437","type":"PanTool"},{"id":"08209a52-8aa5-48b5-86c6-eb6127378b58","type":"WheelZoomTool"},{"id":"f8da0643-0cd4-4631-b94a-6ed7cfdec2d8","type":"BoxZoomTool"},{"id":"f4695add-7432-40c4-b896-4b535e2a5e7a","type":"SaveTool"},{"id":"5a4112cd-7775-47d8-a2ff-6248534020f4","type":"ResetTool"},{"id":"328c976d-3f2d-4b87-98b9-e9b286044741","type":"HelpTool"}]},"id":"5107c7b6-e7d6-4cc4-afab-d51652e26f2f","type":"Toolbar"},{"attributes":{},"id":"8a790aeb-3a3a-4b3b-8fc1-fdd712c56aaf","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"0ee69d73-fc63-4f87-baf0-e4037cabcf1e","type":"Circle"},{"attributes":{},"id":"32209716-6ab7-44ca-81f9-ab91082f6cdf","type":"BasicTickFormatter"}],"root_ids":["54a107df-47e2-4e9a-a5a1-155db7e43305"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"36b9e613-fc47-42e4-8421-dfdab7ebeac1","elementid":"c62ff0a3-bfd5-499d-a020-0b95c65ced0b","modelid":"54a107df-47e2-4e9a-a5a1-155db7e43305"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});