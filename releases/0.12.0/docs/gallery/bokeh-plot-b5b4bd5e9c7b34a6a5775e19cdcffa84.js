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
      };var element = document.getElementById("b9231733-35ab-4314-ad04-0c10a7f01ea9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9231733-35ab-4314-ad04-0c10a7f01ea9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c6e55ad6-4c1e-469f-9fca-c10e521377ba":{"roots":{"references":[{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"18e6f645-fae2-49ba-bfba-f750c4be9fe6","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"},"ticker":{"id":"5f1d8ed8-8ae4-4b2b-8566-acb0de04c681","type":"BasicTicker"}},"id":"fe5364a0-e1fa-418f-b336-eaf747ec65b9","type":"LinearAxis"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"28fe79a0-ff8b-482b-a5d3-ca92a6c359fd","type":"SaveTool"},{"attributes":{},"id":"13ef13d1-7af7-42c4-8eec-76854dd97717","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"47bbd77a-cbe4-4987-859c-09dd7c2eaa37","type":"PanTool"},{"id":"ac046f24-e955-43d1-a4d7-d95f96e2a713","type":"WheelZoomTool"},{"id":"78cbab9e-2c9b-4e50-8466-0e639e797419","type":"BoxZoomTool"},{"id":"28fe79a0-ff8b-482b-a5d3-ca92a6c359fd","type":"SaveTool"},{"id":"90863f19-23a9-4490-b0f2-4095862d0293","type":"ResetTool"},{"id":"dad8cf10-65da-4cf6-aaad-3989c8aaa04e","type":"HelpTool"}]},"id":"a123effc-5304-4d91-94d7-54f25c8810da","type":"Toolbar"},{"attributes":{},"id":"1f9e63fa-f857-441c-be74-5e6c86fdd987","type":"BasicTicker"},{"attributes":{"callback":null},"id":"79947487-76b5-482a-bdf6-ecf722b7f0be","type":"DataRange1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"},"ticker":{"id":"5f1d8ed8-8ae4-4b2b-8566-acb0de04c681","type":"BasicTicker"}},"id":"7062ad19-1dfa-4420-8b32-e63cfdab4616","type":"Grid"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"ef9c0f60-d482-4fb8-abb5-6a6c556c299e","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"},"ticker":{"id":"1f9e63fa-f857-441c-be74-5e6c86fdd987","type":"BasicTicker"}},"id":"f6761867-1f15-4341-802f-30cf8e67cb5f","type":"LinearAxis"},{"attributes":{},"id":"ef9c0f60-d482-4fb8-abb5-6a6c556c299e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"90863f19-23a9-4490-b0f2-4095862d0293","type":"ResetTool"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"},"ticker":{"id":"1f9e63fa-f857-441c-be74-5e6c86fdd987","type":"BasicTicker"}},"id":"d7db6a17-e8ce-4e14-827c-91e958e80990","type":"Grid"},{"attributes":{},"id":"18e6f645-fae2-49ba-bfba-f750c4be9fe6","type":"BasicTickFormatter"},{"attributes":{},"id":"5f1d8ed8-8ae4-4b2b-8566-acb0de04c681","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce16bef8-2e9c-47c1-82b7-af9b4efdc415","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Step ggplot-based plot in Bokeh."},"id":"79944afd-0999-4fa9-b60c-5737961ca703","type":"Title"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"f6761867-1f15-4341-802f-30cf8e67cb5f","type":"LinearAxis"}],"left":[{"id":"fe5364a0-e1fa-418f-b336-eaf747ec65b9","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"f6761867-1f15-4341-802f-30cf8e67cb5f","type":"LinearAxis"},{"id":"d7db6a17-e8ce-4e14-827c-91e958e80990","type":"Grid"},{"id":"fe5364a0-e1fa-418f-b336-eaf747ec65b9","type":"LinearAxis"},{"id":"7062ad19-1dfa-4420-8b32-e63cfdab4616","type":"Grid"},{"id":"a301bfc5-eb64-4bbf-8cc6-b22225c8ef82","type":"Legend"},{"id":"ce16bef8-2e9c-47c1-82b7-af9b4efdc415","type":"BoxAnnotation"},{"id":"bd3936fa-f3c5-4c14-ad85-72ae27ab58f8","type":"GlyphRenderer"}],"title":{"id":"79944afd-0999-4fa9-b60c-5737961ca703","type":"Title"},"tool_events":{"id":"13ef13d1-7af7-42c4-8eec-76854dd97717","type":"ToolEvents"},"toolbar":{"id":"a123effc-5304-4d91-94d7-54f25c8810da","type":"Toolbar"},"x_range":{"id":"79947487-76b5-482a-bdf6-ecf722b7f0be","type":"DataRange1d"},"y_range":{"id":"53602d75-5ed7-43e1-93e0-06a630cd753e","type":"DataRange1d"}},"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,12.0,12.0,13.0,13.0,14.0,14.0,15.0,15.0,16.0,16.0,17.0,17.0,18.0,18.0,19.0,19.0,20.0,20.0,21.0,21.0,22.0,22.0,23.0,23.0,24.0,24.0,25.0,25.0,26.0,26.0,27.0,27.0,28.0,28.0,29.0,29.0,30.0,30.0,31.0,31.0,32.0,32.0,33.0,33.0,34.0,34.0,35.0,35.0,36.0,36.0,37.0,37.0,38.0,38.0,39.0,39.0,40.0,40.0,41.0,41.0,42.0,42.0,43.0,43.0,44.0,44.0,45.0,45.0,46.0,46.0,47.0,47.0,48.0,48.0,49.0,49.0,50.0,50.0,51.0,51.0,52.0,52.0,53.0,53.0,54.0,54.0,55.0,55.0,56.0,56.0,57.0,57.0,58.0,58.0,59.0,59.0,60.0,60.0,61.0,61.0,62.0,62.0,63.0,63.0,64.0,64.0,65.0,65.0,66.0,66.0,67.0,67.0,68.0,68.0,69.0,69.0,70.0,70.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,76.0,76.0,77.0,77.0,78.0,78.0,79.0,79.0,80.0,80.0,81.0,81.0,82.0,82.0,83.0,83.0,84.0,84.0,85.0,85.0,86.0,86.0,87.0,87.0,88.0,88.0,89.0,89.0,90.0,90.0,91.0,91.0,92.0,92.0,93.0,93.0,94.0,94.0,95.0,95.0,96.0,96.0,97.0,97.0,98.0,98.0,99.0],"Series 1":[1.0,1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,5.0,5.0,4.0,4.0,3.0,3.0,2.0,2.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,4.0,4.0,3.0,3.0,2.0,2.0,3.0,3.0,4.0,4.0,3.0,3.0,2.0,2.0,3.0,3.0,4.0,4.0,3.0,3.0,2.0,2.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0]}},"id":"3db5874f-45a8-4a10-b9f0-8c35d2f0b576","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"47bbd77a-cbe4-4987-859c-09dd7c2eaa37","type":"PanTool"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"dad8cf10-65da-4cf6-aaad-3989c8aaa04e","type":"HelpTool"},{"attributes":{"callback":null},"id":"53602d75-5ed7-43e1-93e0-06a630cd753e","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"9111dcc2-9423-40be-9160-fe1a5ded6abb","type":"Line"},{"attributes":{"overlay":{"id":"ce16bef8-2e9c-47c1-82b7-af9b4efdc415","type":"BoxAnnotation"},"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"78cbab9e-2c9b-4e50-8466-0e639e797419","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"3db5874f-45a8-4a10-b9f0-8c35d2f0b576","type":"ColumnDataSource"},"glyph":{"id":"9111dcc2-9423-40be-9160-fe1a5ded6abb","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bd3936fa-f3c5-4c14-ad85-72ae27ab58f8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"a301bfc5-eb64-4bbf-8cc6-b22225c8ef82","type":"Legend"},{"attributes":{"plot":{"id":"ae7f796a-09f7-4415-9a91-d587af334abf","type":"Plot"}},"id":"ac046f24-e955-43d1-a4d7-d95f96e2a713","type":"WheelZoomTool"}],"root_ids":["ae7f796a-09f7-4415-9a91-d587af334abf"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c6e55ad6-4c1e-469f-9fca-c10e521377ba","elementid":"b9231733-35ab-4314-ad04-0c10a7f01ea9","modelid":"ae7f796a-09f7-4415-9a91-d587af334abf"}];
              
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