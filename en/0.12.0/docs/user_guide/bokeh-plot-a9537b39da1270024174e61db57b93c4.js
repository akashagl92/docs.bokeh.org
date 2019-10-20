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
      };var element = document.getElementById("995cf93c-dd5b-4a8c-b9e9-90dbb2dc5489");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '995cf93c-dd5b-4a8c-b9e9-90dbb2dc5489' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"102c0b93-9df8-4eef-bb49-0ba0c643b3f6":{"roots":{"references":[{"attributes":{},"id":"c88e7c2d-c0b8-4e43-8e66-7e94dc5cab45","type":"BasicTicker"},{"attributes":{},"id":"38a8e27f-d765-493b-8876-9707630895c0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"46df70dd-dc0c-43e3-8553-35e64fea4b1f","type":"Range1d"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"99f09cd5-023a-433a-80f3-29893de5a152","type":"BasicTickFormatter"},"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"},"ticker":{"id":"c88e7c2d-c0b8-4e43-8e66-7e94dc5cab45","type":"BasicTicker"}},"id":"f630b97c-8ff9-4d12-9c04-1451c1469f54","type":"LinearAxis"},{"attributes":{"data_source":{"id":"13be1a32-02a9-4f4e-9186-aacdac29d9ab","type":"ColumnDataSource"},"glyph":{"id":"c3e34b85-fd16-4de5-8e00-b610ce9628ef","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0339f511-a210-4a93-990a-35979937926d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"c3e34b85-fd16-4de5-8e00-b610ce9628ef","type":"Circle"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[21.5,23.7,18.0,19.0,30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0,36.4,20.3,25.4,18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0,14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"13be1a32-02a9-4f4e-9186-aacdac29d9ab","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4b07fa45-2bf2-4c5b-a6a5-bdb126427741","type":"PanTool"},{"id":"16028ea1-6e7e-4887-b21f-64e5b5830c32","type":"WheelZoomTool"},{"id":"c242c560-5340-4320-8b37-4079f4d55579","type":"BoxZoomTool"},{"id":"929c30db-22cf-416c-8002-167f20f0375a","type":"SaveTool"},{"id":"a927722e-3faa-4a63-aee9-165002ac5391","type":"ResetTool"},{"id":"4c3705c0-da1b-4f54-b5b6-10aa6e513dab","type":"HelpTool"}]},"id":"0034d48c-f231-48f8-8f3a-122576edd690","type":"Toolbar"},{"attributes":{},"id":"99f09cd5-023a-433a-80f3-29893de5a152","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"2963d33e-021f-416f-8ff3-fca9a6cafdb2","type":"Title"},{"attributes":{"below":[{"id":"f630b97c-8ff9-4d12-9c04-1451c1469f54","type":"LinearAxis"}],"height":400,"left":[{"id":"a3c587c7-9673-4609-8ab4-f4e7226d85d5","type":"LinearAxis"}],"renderers":[{"id":"68da682a-0dd6-41fb-8fec-02ebee368289","type":"BoxAnnotation"},{"id":"0339f511-a210-4a93-990a-35979937926d","type":"GlyphRenderer"},{"id":"dec32dbe-967a-4423-a53c-5de6064deb79","type":"Legend"},{"id":"f630b97c-8ff9-4d12-9c04-1451c1469f54","type":"LinearAxis"},{"id":"a3c587c7-9673-4609-8ab4-f4e7226d85d5","type":"LinearAxis"},{"id":"3e27563a-e01d-45d0-8356-e83e1a05903b","type":"Grid"},{"id":"c537a714-48d2-4c0c-bf7f-89e806f9d0be","type":"Grid"}],"title":{"id":"2963d33e-021f-416f-8ff3-fca9a6cafdb2","type":"Title"},"tool_events":{"id":"c63bd56d-491d-459f-86f1-728c755c030c","type":"ToolEvents"},"toolbar":{"id":"0034d48c-f231-48f8-8f3a-122576edd690","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"46df70dd-dc0c-43e3-8553-35e64fea4b1f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3f83a882-83ad-4851-ac52-b53e6b3c6bc1","type":"Range1d"}},"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"3f83a882-83ad-4851-ac52-b53e6b3c6bc1","type":"Range1d"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"16028ea1-6e7e-4887-b21f-64e5b5830c32","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68da682a-0dd6-41fb-8fec-02ebee368289","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"},"ticker":{"id":"c88e7c2d-c0b8-4e43-8e66-7e94dc5cab45","type":"BasicTicker"}},"id":"3e27563a-e01d-45d0-8356-e83e1a05903b","type":"Grid"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"4c3705c0-da1b-4f54-b5b6-10aa6e513dab","type":"HelpTool"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"4b07fa45-2bf2-4c5b-a6a5-bdb126427741","type":"PanTool"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"38a8e27f-d765-493b-8876-9707630895c0","type":"BasicTickFormatter"},"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"},"ticker":{"id":"8f0e0388-4074-4e86-9bff-52a00323ff14","type":"BasicTicker"}},"id":"a3c587c7-9673-4609-8ab4-f4e7226d85d5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"},"ticker":{"id":"8f0e0388-4074-4e86-9bff-52a00323ff14","type":"BasicTicker"}},"id":"c537a714-48d2-4c0c-bf7f-89e806f9d0be","type":"Grid"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"929c30db-22cf-416c-8002-167f20f0375a","type":"SaveTool"},{"attributes":{"overlay":{"id":"68da682a-0dd6-41fb-8fec-02ebee368289","type":"BoxAnnotation"},"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"c242c560-5340-4320-8b37-4079f4d55579","type":"BoxZoomTool"},{"attributes":{"location":"top_left","plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"dec32dbe-967a-4423-a53c-5de6064deb79","type":"Legend"},{"attributes":{},"id":"c63bd56d-491d-459f-86f1-728c755c030c","type":"ToolEvents"},{"attributes":{"plot":{"id":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f","subtype":"Chart","type":"Plot"}},"id":"a927722e-3faa-4a63-aee9-165002ac5391","type":"ResetTool"},{"attributes":{},"id":"8f0e0388-4074-4e86-9bff-52a00323ff14","type":"BasicTicker"}],"root_ids":["9ed7ffee-a1d1-4bda-a066-5890cbf5203f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"102c0b93-9df8-4eef-bb49-0ba0c643b3f6","elementid":"995cf93c-dd5b-4a8c-b9e9-90dbb2dc5489","modelid":"9ed7ffee-a1d1-4bda-a066-5890cbf5203f"}];
              
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