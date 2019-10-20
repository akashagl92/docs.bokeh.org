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
      };var element = document.getElementById("1fa5c903-6d5d-4d60-b88d-62b198a4ecd2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1fa5c903-6d5d-4d60-b88d-62b198a4ecd2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"9bf2027d-82c3-4c1f-b2bd-972ff64dce36":{"roots":{"references":[{"attributes":{"overlay":{"id":"c732ec72-f1aa-4835-90ff-464e32275e14","type":"BoxAnnotation"},"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"e9cd711f-0c66-466c-9de6-8d471745d284","type":"BoxZoomTool"},{"attributes":{},"id":"b4d118e6-f55d-47af-80f1-e9b760d717d7","type":"ToolEvents"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"70c74a06-8493-4b78-9a2b-a3591ac273c9","type":"PanTool"},{"attributes":{"formatter":{"id":"eed16ef4-9eb5-43ce-a1a8-9346c65995d4","type":"BasicTickFormatter"},"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5cf124ab-3ab4-442a-b6ff-a1f360aa3e10","type":"BasicTicker"}},"id":"ccebe701-aad9-48af-9974-99d93375fcff","type":"LinearAxis"},{"attributes":{},"id":"fde11dd4-9151-4d80-8c09-98a0d81e8dff","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"4c325bf8-c25e-434c-9f3f-93f772b4a9ff","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}]},"id":"709bb7ad-7a0b-48e5-80a1-737e25a3a61f","type":"Row"},{"attributes":{},"id":"aecf59e8-8908-4bfb-b389-c1353f9512f7","type":"BasicTicker"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"},"ticker":{"id":"5defb71e-85d9-473d-9ac1-e19937f4895c","type":"BasicTicker"}},"id":"ddb80f75-949d-4800-af9d-7ca778da5622","type":"Grid"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"c2c68c4c-2a20-4c20-9e2d-51e6d6fcc7a9","type":"SaveTool"},{"attributes":{},"id":"1a43f23f-7d85-472f-8256-cd99a2db0f85","type":"ToolEvents"},{"attributes":{},"id":"feff0227-36c4-4301-bb1e-9f40758e5655","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5cf124ab-3ab4-442a-b6ff-a1f360aa3e10","type":"BasicTicker"}},"id":"7c33abae-9a25-4c09-8cb1-58931262afa5","type":"Grid"},{"attributes":{"below":[{"id":"3523d2a6-6517-47c2-a856-4147ddb4b82a","type":"LinearAxis"}],"left":[{"id":"f0ce90b5-cd08-4eb3-a40e-ab9d5d5fdf89","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3523d2a6-6517-47c2-a856-4147ddb4b82a","type":"LinearAxis"},{"id":"ddb80f75-949d-4800-af9d-7ca778da5622","type":"Grid"},{"id":"f0ce90b5-cd08-4eb3-a40e-ab9d5d5fdf89","type":"LinearAxis"},{"id":"a5109f1c-8f3f-4172-a0fe-e6f5fb03d724","type":"Grid"},{"id":"405b786e-09f8-4afe-a10c-f863a08011c0","type":"BoxAnnotation"},{"id":"81cfc044-7f3c-42ad-a39a-581d65484212","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"53a47732-e520-4f0f-99a4-e27bb0712b04","type":"ToolEvents"},"toolbar":{"id":"d047ee11-163d-4bd9-9a84-f0d78fb6022a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f9be9d38-1b43-4c33-a360-74697e49b1aa","type":"DataRange1d"},"y_range":{"id":"41946bd3-00cd-4ebc-9085-7b7d02aca586","type":"DataRange1d"}},"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"ba4452b7-6016-49e9-9fb2-e055165b74ef","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"b4c7f206-bda2-43fc-9be1-ff563ffffeed","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b4c7f206-bda2-43fc-9be1-ff563ffffeed","type":"ColumnDataSource"},"glyph":{"id":"dec1d5b9-692d-4aff-ba51-3138295c9f56","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"d4bf21d2-b2c5-44f8-a92a-1fb2423fb809","type":"Square"},"selection_glyph":null},"id":"81cfc044-7f3c-42ad-a39a-581d65484212","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"709bb7ad-7a0b-48e5-80a1-737e25a3a61f","type":"Row"}]},"id":"ee64ae1f-6575-4b2e-87a3-eadcb6046361","type":"Column"},{"attributes":{},"id":"4cba26b0-8e13-446d-942a-4bd6d657e3ed","type":"BasicTickFormatter"},{"attributes":{},"id":"5cf124ab-3ab4-442a-b6ff-a1f360aa3e10","type":"BasicTicker"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"c2e85b1f-9304-4d26-b12d-23ba18a8cb54","type":"ResetTool"},{"attributes":{"formatter":{"id":"2e12e8cc-4ca7-44d9-abe9-62c3016ce870","type":"BasicTickFormatter"},"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"},"ticker":{"id":"5defb71e-85d9-473d-9ac1-e19937f4895c","type":"BasicTicker"}},"id":"3523d2a6-6517-47c2-a856-4147ddb4b82a","type":"LinearAxis"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"6e417d1c-9c52-495f-bebb-1f44db82e2cf","type":"SaveTool"},{"attributes":{"below":[{"id":"464b262f-69d7-4f21-9ced-cd34622f3c6b","type":"LinearAxis"}],"left":[{"id":"88d2f791-11a3-4421-949e-d8ce3258f2db","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"464b262f-69d7-4f21-9ced-cd34622f3c6b","type":"LinearAxis"},{"id":"4cf257d9-341a-4583-b74e-88b99ea810bd","type":"Grid"},{"id":"88d2f791-11a3-4421-949e-d8ce3258f2db","type":"LinearAxis"},{"id":"ec290ada-daa0-4f22-8c73-c466fb44dd82","type":"Grid"},{"id":"c732ec72-f1aa-4835-90ff-464e32275e14","type":"BoxAnnotation"},{"id":"577537e2-1832-4d61-97a0-7d12e515c0dd","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"1a43f23f-7d85-472f-8256-cd99a2db0f85","type":"ToolEvents"},"toolbar":{"id":"a017a7e2-f517-4da9-ac6f-ac51d393d15c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f9be9d38-1b43-4c33-a360-74697e49b1aa","type":"DataRange1d"},"y_range":{"id":"07ba3930-f0cd-4d74-b683-f925762a28a3","type":"DataRange1d"}},"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},"ticker":{"id":"aecf59e8-8908-4bfb-b389-c1353f9512f7","type":"BasicTicker"}},"id":"ec290ada-daa0-4f22-8c73-c466fb44dd82","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70c74a06-8493-4b78-9a2b-a3591ac273c9","type":"PanTool"},{"id":"f0131d02-d51b-47f6-90d1-92df68a02636","type":"WheelZoomTool"},{"id":"e9cd711f-0c66-466c-9de6-8d471745d284","type":"BoxZoomTool"},{"id":"6e417d1c-9c52-495f-bebb-1f44db82e2cf","type":"SaveTool"},{"id":"b6f648e2-9dc9-4524-853c-1c6c98c1ad83","type":"ResetTool"},{"id":"dfa8b413-4229-43ac-bdda-6dc5c8735593","type":"HelpTool"}]},"id":"a017a7e2-f517-4da9-ac6f-ac51d393d15c","type":"Toolbar"},{"attributes":{},"id":"5defb71e-85d9-473d-9ac1-e19937f4895c","type":"BasicTicker"},{"attributes":{},"id":"7fd191e8-f091-42cb-87a3-3cc437ccfce2","type":"BasicTicker"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"aad1e63a-f26c-4161-84eb-874802abec8b","type":"SaveTool"},{"attributes":{},"id":"38f1b459-6bee-4df4-8f47-87dd97f8e523","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3c0ba04-d753-4bc0-b410-4dce46065dc7","type":"Circle"},{"attributes":{"below":[{"id":"a222832b-57a6-4e1e-b0e0-211ac3c01348","type":"LinearAxis"}],"left":[{"id":"ccebe701-aad9-48af-9974-99d93375fcff","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a222832b-57a6-4e1e-b0e0-211ac3c01348","type":"LinearAxis"},{"id":"5d7dfc40-6f7a-497e-b967-374b9069fc8d","type":"Grid"},{"id":"ccebe701-aad9-48af-9974-99d93375fcff","type":"LinearAxis"},{"id":"7c33abae-9a25-4c09-8cb1-58931262afa5","type":"Grid"},{"id":"6bf8381c-b05e-4f7a-86b2-0f5f10dfde20","type":"BoxAnnotation"},{"id":"38e2ed53-be32-4e31-882e-c3a4df70bf12","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"b4d118e6-f55d-47af-80f1-e9b760d717d7","type":"ToolEvents"},"toolbar":{"id":"b422f6dc-594b-4d6e-ab6f-32293ba79f49","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f9be9d38-1b43-4c33-a360-74697e49b1aa","type":"DataRange1d"},"y_range":{"id":"07ba3930-f0cd-4d74-b683-f925762a28a3","type":"DataRange1d"}},"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"07ba3930-f0cd-4d74-b683-f925762a28a3","type":"DataRange1d"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"dfa8b413-4229-43ac-bdda-6dc5c8735593","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fd191e8-f091-42cb-87a3-3cc437ccfce2","type":"BasicTicker"}},"id":"a5109f1c-8f3f-4172-a0fe-e6f5fb03d724","type":"Grid"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"35e02cf5-20c0-46ec-b815-109b053ce499","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d769050-eda6-4a6c-8736-a52f8b2347b5","type":"Circle"},{"attributes":{},"id":"a83ad933-e252-42fe-b5f7-5b8a2f8fde3c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"cd66a05f-3446-4391-9b66-3d2589874ffd","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c732ec72-f1aa-4835-90ff-464e32275e14","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8131f712-5096-4a20-910b-9464d74d336c","type":"Triangle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f21528b-537f-4c1b-b3f0-13590e6ea061","type":"PanTool"},{"id":"35e02cf5-20c0-46ec-b815-109b053ce499","type":"WheelZoomTool"},{"id":"a65a2b1a-1179-4ec2-a1cf-c42bc48ed2ba","type":"BoxZoomTool"},{"id":"c2c68c4c-2a20-4c20-9e2d-51e6d6fcc7a9","type":"SaveTool"},{"id":"c2e85b1f-9304-4d26-b12d-23ba18a8cb54","type":"ResetTool"},{"id":"f23ccea0-696a-47e7-bf87-462e472ed2ce","type":"HelpTool"}]},"id":"b422f6dc-594b-4d6e-ab6f-32293ba79f49","type":"Toolbar"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"06efa517-6751-4931-844a-e007c0f349d7","type":"ResetTool"},{"attributes":{"callback":null},"id":"f9be9d38-1b43-4c33-a360-74697e49b1aa","type":"DataRange1d"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f1b459-6bee-4df4-8f47-87dd97f8e523","type":"BasicTicker"}},"id":"4cf257d9-341a-4583-b74e-88b99ea810bd","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4bf21d2-b2c5-44f8-a92a-1fb2423fb809","type":"Square"},{"attributes":{},"id":"74fccbb5-37f7-459b-85e4-9df934e640b1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"b6f648e2-9dc9-4524-853c-1c6c98c1ad83","type":"ResetTool"},{"attributes":{},"id":"eed16ef4-9eb5-43ce-a1a8-9346c65995d4","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dec1d5b9-692d-4aff-ba51-3138295c9f56","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"405b786e-09f8-4afe-a10c-f863a08011c0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"}},"id":"f0131d02-d51b-47f6-90d1-92df68a02636","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"ded0c832-c940-42e8-9700-91214650fe88","type":"ColumnDataSource"},"glyph":{"id":"8131f712-5096-4a20-910b-9464d74d336c","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"79d6e653-98ee-4bc8-b84d-efd4e97385ea","type":"Triangle"},"selection_glyph":null},"id":"577537e2-1832-4d61-97a0-7d12e515c0dd","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6bf8381c-b05e-4f7a-86b2-0f5f10dfde20","type":"BoxAnnotation"},"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"a65a2b1a-1179-4ec2-a1cf-c42bc48ed2ba","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ba4452b7-6016-49e9-9fb2-e055165b74ef","type":"PanTool"},{"id":"9af9d2a5-b997-469b-b585-d4f903600684","type":"WheelZoomTool"},{"id":"c0881f1a-4b5d-42a3-a9ee-6dee01975522","type":"BoxZoomTool"},{"id":"aad1e63a-f26c-4161-84eb-874802abec8b","type":"SaveTool"},{"id":"06efa517-6751-4931-844a-e007c0f349d7","type":"ResetTool"},{"id":"cd66a05f-3446-4391-9b66-3d2589874ffd","type":"HelpTool"}]},"id":"d047ee11-163d-4bd9-9a84-f0d78fb6022a","type":"Toolbar"},{"attributes":{"formatter":{"id":"74fccbb5-37f7-459b-85e4-9df934e640b1","type":"BasicTickFormatter"},"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde11dd4-9151-4d80-8c09-98a0d81e8dff","type":"BasicTicker"}},"id":"a222832b-57a6-4e1e-b0e0-211ac3c01348","type":"LinearAxis"},{"attributes":{},"id":"2e12e8cc-4ca7-44d9-abe9-62c3016ce870","type":"BasicTickFormatter"},{"attributes":{},"id":"53a47732-e520-4f0f-99a4-e27bb0712b04","type":"ToolEvents"},{"attributes":{"formatter":{"id":"feff0227-36c4-4301-bb1e-9f40758e5655","type":"BasicTickFormatter"},"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f1b459-6bee-4df4-8f47-87dd97f8e523","type":"BasicTicker"}},"id":"464b262f-69d7-4f21-9ced-cd34622f3c6b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a83ad933-e252-42fe-b5f7-5b8a2f8fde3c","type":"BasicTickFormatter"},"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fd191e8-f091-42cb-87a3-3cc437ccfce2","type":"BasicTicker"}},"id":"f0ce90b5-cd08-4eb3-a40e-ab9d5d5fdf89","type":"LinearAxis"},{"attributes":{"callback":null},"id":"41946bd3-00cd-4ebc-9085-7b7d02aca586","type":"DataRange1d"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"2f21528b-537f-4c1b-b3f0-13590e6ea061","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"79d6e653-98ee-4bc8-b84d-efd4e97385ea","type":"Triangle"},{"attributes":{"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"9af9d2a5-b997-469b-b585-d4f903600684","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4c325bf8-c25e-434c-9f3f-93f772b4a9ff","type":"ColumnDataSource"},"glyph":{"id":"f3c0ba04-d753-4bc0-b410-4dce46065dc7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3d769050-eda6-4a6c-8736-a52f8b2347b5","type":"Circle"},"selection_glyph":null},"id":"38e2ed53-be32-4e31-882e-c3a4df70bf12","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde11dd4-9151-4d80-8c09-98a0d81e8dff","type":"BasicTicker"}},"id":"5d7dfc40-6f7a-497e-b967-374b9069fc8d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6bf8381c-b05e-4f7a-86b2-0f5f10dfde20","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"4cba26b0-8e13-446d-942a-4bd6d657e3ed","type":"BasicTickFormatter"},"plot":{"id":"5e0b7f9f-84fa-4bbe-8ca1-516153dcbe52","subtype":"Figure","type":"Plot"},"ticker":{"id":"aecf59e8-8908-4bfb-b389-c1353f9512f7","type":"BasicTicker"}},"id":"88d2f791-11a3-4421-949e-d8ce3258f2db","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"ded0c832-c940-42e8-9700-91214650fe88","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"82d8d052-0d9f-4823-8e65-b76adb7c4cdb","subtype":"Figure","type":"Plot"}},"id":"f23ccea0-696a-47e7-bf87-462e472ed2ce","type":"HelpTool"},{"attributes":{"overlay":{"id":"405b786e-09f8-4afe-a10c-f863a08011c0","type":"BoxAnnotation"},"plot":{"id":"07f73c63-d744-4149-9518-a0eb1bc9db67","subtype":"Figure","type":"Plot"}},"id":"c0881f1a-4b5d-42a3-a9ee-6dee01975522","type":"BoxZoomTool"}],"root_ids":["ee64ae1f-6575-4b2e-87a3-eadcb6046361"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"9bf2027d-82c3-4c1f-b2bd-972ff64dce36","elementid":"1fa5c903-6d5d-4d60-b88d-62b198a4ecd2","modelid":"ee64ae1f-6575-4b2e-87a3-eadcb6046361"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
