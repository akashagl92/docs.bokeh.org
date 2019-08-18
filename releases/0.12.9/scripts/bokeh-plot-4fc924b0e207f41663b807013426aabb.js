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
      };var element = document.getElementById("7b3a1240-7df0-4d28-957e-ec367fff857d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b3a1240-7df0-4d28-957e-ec367fff857d' but no matching script tag was found. ")
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
                    var docs_json = {"df1f8dfc-a1ee-460c-9d4e-36aeb02de28c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"7f5386c7-08cd-41c7-a2a7-e3f5180f877c","type":"Circle"},{"attributes":{"source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"}},"id":"2080bd65-9e4c-4c04-972d-33c7e99f98d0","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2ce0737f-8b6a-4e13-a862-4e416754cc51","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"77b4ed2d-5939-4617-9a4b-93253be01d62","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"a4d25ead-d0f3-4fc0-a368-b28593076bef","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"77b4ed2d-5939-4617-9a4b-93253be01d62","type":"LinearAxis"},{"id":"a4d25ead-d0f3-4fc0-a368-b28593076bef","type":"LinearAxis"},{"id":"4a8b3271-548e-4806-9727-db198251a971","type":"Grid"},{"id":"c9ad9500-a0ad-479c-9aac-ecc8cbe3bf74","type":"Grid"},{"id":"3fec4015-afc0-4b9d-912c-c65168ac4cec","type":"GlyphRenderer"},{"id":"816ab1de-afca-4c06-9278-b0844ae28558","type":"GlyphRenderer"}],"title":{"id":"c31ec84d-5804-441c-ab3d-22c156ff153a","type":"Title"},"toolbar":{"id":"2ce0737f-8b6a-4e13-a862-4e416754cc51","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc4ca7ae-4740-4a61-9db8-1f45c3b26645","type":"Range1d"},"x_scale":{"id":"68301d79-e2af-4428-acff-6e0877124ace","type":"LinearScale"},"y_range":{"id":"6fd4f32d-a582-4510-ac3e-ea5b80d0c411","type":"Range1d"},"y_scale":{"id":"8c546a05-c3f7-4f14-b306-ee77082cf421","type":"LinearScale"}},"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},{"attributes":{"plot":null,"text":"III"},"id":"c31ec84d-5804-441c-ab3d-22c156ff153a","type":"Title"},{"attributes":{"data_source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"},"glyph":{"id":"7f5386c7-08cd-41c7-a2a7-e3f5180f877c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18298fb2-ee33-4c36-ae7f-a46c7e7be104","type":"CDSView"}},"id":"5a7ff16a-51c1-49b8-83e6-aab478cf3db4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"}},"id":"18298fb2-ee33-4c36-ae7f-a46c7e7be104","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"0cfd8abb-530d-47da-b883-a8544893c73c","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"c90292ef-0bb6-4d93-8b0d-db174f49f47c","type":"BasicTickFormatter"},"plot":{"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},"ticker":{"id":"c6392d4e-c402-44b6-8ed0-6a2ac2537b7c","type":"BasicTicker"}},"id":"77b4ed2d-5939-4617-9a4b-93253be01d62","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"300af2eb-af2d-4fa5-a344-45c7b51d4422","type":"BasicTickFormatter"},"plot":{"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},"ticker":{"id":"1fad8d4f-12ba-40fa-8721-e839664a3f7a","type":"BasicTicker"}},"id":"a4d25ead-d0f3-4fc0-a368-b28593076bef","type":"LinearAxis"},{"attributes":{},"id":"c6392d4e-c402-44b6-8ed0-6a2ac2537b7c","type":"BasicTicker"},{"attributes":{"plot":{"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},"ticker":{"id":"c6392d4e-c402-44b6-8ed0-6a2ac2537b7c","type":"BasicTicker"}},"id":"4a8b3271-548e-4806-9727-db198251a971","type":"Grid"},{"attributes":{},"id":"1fad8d4f-12ba-40fa-8721-e839664a3f7a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},"ticker":{"id":"1fad8d4f-12ba-40fa-8721-e839664a3f7a","type":"BasicTicker"}},"id":"c9ad9500-a0ad-479c-9aac-ecc8cbe3bf74","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fccd0488-3ead-4677-9f5f-74efcdd6044e","type":"Line"},{"attributes":{"data_source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"},"glyph":{"id":"fccd0488-3ead-4677-9f5f-74efcdd6044e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d7ec11ec-fe17-4c8a-a3a8-b826e7a153c3","type":"CDSView"}},"id":"3fec4015-afc0-4b9d-912c-c65168ac4cec","type":"GlyphRenderer"},{"attributes":{"source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"}},"id":"d7ec11ec-fe17-4c8a-a3a8-b826e7a153c3","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4f73944d-03eb-41c7-b375-49d928efc112","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"7ec74199-8afe-49f3-abd5-39facb16cac6","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"77fa3900-9807-4235-a0ae-d4d484f7d468","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7ec74199-8afe-49f3-abd5-39facb16cac6","type":"LinearAxis"},{"id":"77fa3900-9807-4235-a0ae-d4d484f7d468","type":"LinearAxis"},{"id":"afacef24-08ce-4578-9666-5ff49931a6a0","type":"Grid"},{"id":"db6fe284-769f-41dc-8cf9-c7982f08844d","type":"Grid"},{"id":"14b1d065-2a0b-46e8-bb51-99b8f7f97c60","type":"GlyphRenderer"},{"id":"4252f58c-959a-4cda-ac89-2efc71d2893c","type":"GlyphRenderer"}],"title":{"id":"4e0be0b2-b1f3-446f-8b29-14c8b5aa13a2","type":"Title"},"toolbar":{"id":"4f73944d-03eb-41c7-b375-49d928efc112","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc4ca7ae-4740-4a61-9db8-1f45c3b26645","type":"Range1d"},"x_scale":{"id":"bf477755-dfb7-4409-bf28-be814aad3b75","type":"LinearScale"},"y_range":{"id":"6fd4f32d-a582-4510-ac3e-ea5b80d0c411","type":"Range1d"},"y_scale":{"id":"50864075-a8df-46c9-921e-3ea3a4a9598a","type":"LinearScale"}},"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"},{"attributes":{"plot":null,"text":"IV"},"id":"4e0be0b2-b1f3-446f-8b29-14c8b5aa13a2","type":"Title"},{"attributes":{"data_source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"},"glyph":{"id":"0cfd8abb-530d-47da-b883-a8544893c73c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"774f6b87-88c5-4b46-b744-3fb087167a97","type":"CDSView"}},"id":"816ab1de-afca-4c06-9278-b0844ae28558","type":"GlyphRenderer"},{"attributes":{"source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"}},"id":"774f6b87-88c5-4b46-b744-3fb087167a97","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"70ce45ae-6157-4281-a613-a3aad4240e56","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"2f7ede50-32ee-4a40-acb5-d1061475cb91","type":"BasicTickFormatter"},"plot":{"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"},"ticker":{"id":"d192df83-2727-41b0-a28e-cbe449bcec4a","type":"BasicTicker"}},"id":"7ec74199-8afe-49f3-abd5-39facb16cac6","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25de2ca5-9c7a-4cba-96c3-43ec414b9696","type":"BasicTickFormatter"},"plot":{"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"},"ticker":{"id":"c2e835ed-c48b-45b1-9dc6-6ff273578f42","type":"BasicTicker"}},"id":"77fa3900-9807-4235-a0ae-d4d484f7d468","type":"LinearAxis"},{"attributes":{},"id":"d192df83-2727-41b0-a28e-cbe449bcec4a","type":"BasicTicker"},{"attributes":{"plot":{"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"},"ticker":{"id":"d192df83-2727-41b0-a28e-cbe449bcec4a","type":"BasicTicker"}},"id":"afacef24-08ce-4578-9666-5ff49931a6a0","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"a2efb454-4dc1-4e67-8267-053c29a816f1","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"21fcd196-1732-43a8-ba42-5fa4f6821e72","type":"BasicTickFormatter"},"plot":{"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},"ticker":{"id":"6e9816df-75a7-4a3c-8912-3919e1d5b93f","type":"BasicTicker"}},"id":"14029465-e047-4ac7-87c9-889a9716f8d6","type":"LinearAxis"},{"attributes":{},"id":"c2e835ed-c48b-45b1-9dc6-6ff273578f42","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"6c56d161-102d-4594-b6e7-3bae674803a0","type":"BasicTickFormatter"},"plot":{"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},"ticker":{"id":"eaf5d973-3a69-4c65-93dc-d6522bb5d4fb","type":"BasicTicker"}},"id":"702e11cf-520b-47ee-be95-b7b4a9ec319a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"},"ticker":{"id":"c2e835ed-c48b-45b1-9dc6-6ff273578f42","type":"BasicTicker"}},"id":"db6fe284-769f-41dc-8cf9-c7982f08844d","type":"Grid"},{"attributes":{},"id":"6e9816df-75a7-4a3c-8912-3919e1d5b93f","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"972529b8-4948-42f2-86c4-75c8a9e154d6","type":"Line"},{"attributes":{"plot":{"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},"ticker":{"id":"6e9816df-75a7-4a3c-8912-3919e1d5b93f","type":"BasicTicker"}},"id":"3cf18c16-f5a8-4b6c-b94c-4aca339bd64f","type":"Grid"},{"attributes":{"data_source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"},"glyph":{"id":"972529b8-4948-42f2-86c4-75c8a9e154d6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b7557701-671f-45f3-9bb5-e66dad54b25b","type":"CDSView"}},"id":"14b1d065-2a0b-46e8-bb51-99b8f7f97c60","type":"GlyphRenderer"},{"attributes":{},"id":"eaf5d973-3a69-4c65-93dc-d6522bb5d4fb","type":"BasicTicker"},{"attributes":{"source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"}},"id":"b7557701-671f-45f3-9bb5-e66dad54b25b","type":"CDSView"},{"attributes":{"children":[{"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},{"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"}]},"id":"2be6bcc7-1b6d-4fc2-9d33-471251c530cf","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},"ticker":{"id":"eaf5d973-3a69-4c65-93dc-d6522bb5d4fb","type":"BasicTicker"}},"id":"67b47ed0-7e73-48eb-9f73-0205acd03a8d","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"14cecee6-a195-4ae8-a149-484824ddec40","type":"Line"},{"attributes":{"children":[{"id":"2be6bcc7-1b6d-4fc2-9d33-471251c530cf","type":"Row"},{"id":"792f987c-4cfd-4fba-9fa0-622a1ba8015a","type":"Row"}]},"id":"14ac7871-da16-4a26-b03e-15548e7db95a","type":"Column"},{"attributes":{"data_source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"},"glyph":{"id":"14cecee6-a195-4ae8-a149-484824ddec40","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"750508f4-51e6-41fb-a00c-52ea550f2d6b","type":"CDSView"}},"id":"135c2de0-630c-4142-b7b5-0398900714bb","type":"GlyphRenderer"},{"attributes":{},"id":"ab14b60c-c390-479d-ae8a-482ed4476377","type":"LinearScale"},{"attributes":{"data_source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"},"glyph":{"id":"70ce45ae-6157-4281-a613-a3aad4240e56","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6855d9fe-13e8-4828-92b4-4462384749b8","type":"CDSView"}},"id":"4252f58c-959a-4cda-ac89-2efc71d2893c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"}},"id":"750508f4-51e6-41fb-a00c-52ea550f2d6b","type":"CDSView"},{"attributes":{"source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"}},"id":"6855d9fe-13e8-4828-92b4-4462384749b8","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"27ed29c1-7081-4513-89e2-3edc0ef6ac68","type":"Toolbar"},{"attributes":{},"id":"68301d79-e2af-4428-acff-6e0877124ace","type":"LinearScale"},{"attributes":{},"id":"bb495f2c-144d-4cc5-b15e-230b7450d50b","type":"LinearScale"},{"attributes":{},"id":"c90292ef-0bb6-4d93-8b0d-db174f49f47c","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"9e4c5e1e-2b98-4e1c-82ea-f33d5e13ac83","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"88cd9492-c923-45b8-aa57-9f6abae54dff","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9e4c5e1e-2b98-4e1c-82ea-f33d5e13ac83","type":"LinearAxis"},{"id":"88cd9492-c923-45b8-aa57-9f6abae54dff","type":"LinearAxis"},{"id":"213257d0-d6de-46b8-b6b1-3fd0c7924a3f","type":"Grid"},{"id":"032b6e1e-f558-4847-959f-e6242b331708","type":"Grid"},{"id":"0bfe1a28-9e25-436f-8a5b-feed0c3151bf","type":"GlyphRenderer"},{"id":"5a7ff16a-51c1-49b8-83e6-aab478cf3db4","type":"GlyphRenderer"}],"title":{"id":"c1e80fb2-bf1c-46a9-a9b0-119fd89e1a2b","type":"Title"},"toolbar":{"id":"27ed29c1-7081-4513-89e2-3edc0ef6ac68","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc4ca7ae-4740-4a61-9db8-1f45c3b26645","type":"Range1d"},"x_scale":{"id":"d3e8cd77-b033-454b-869d-67422cb82138","type":"LinearScale"},"y_range":{"id":"6fd4f32d-a582-4510-ac3e-ea5b80d0c411","type":"Range1d"},"y_scale":{"id":"fdcffcf8-4b99-4a58-9af0-eb59d389c3c3","type":"LinearScale"}},"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"},{"attributes":{},"id":"bf477755-dfb7-4409-bf28-be814aad3b75","type":"LinearScale"},{"attributes":{"plot":null,"text":"II"},"id":"c1e80fb2-bf1c-46a9-a9b0-119fd89e1a2b","type":"Title"},{"attributes":{},"id":"21fcd196-1732-43a8-ba42-5fa4f6821e72","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"},"glyph":{"id":"a2efb454-4dc1-4e67-8267-053c29a816f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1c9ad8af-05cb-4a1c-9f39-130ae944fe43","type":"CDSView"}},"id":"f89c34a0-f395-431d-9852-eb188130ba3c","type":"GlyphRenderer"},{"attributes":{},"id":"fdcffcf8-4b99-4a58-9af0-eb59d389c3c3","type":"LinearScale"},{"attributes":{},"id":"6c56d161-102d-4594-b6e7-3bae674803a0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"}},"id":"1c9ad8af-05cb-4a1c-9f39-130ae944fe43","type":"CDSView"},{"attributes":{"children":[{"id":"0e752fc8-7dff-4bb8-ae03-eecd29f63139","type":"Plot"},{"id":"d52d606d-1cc4-4b11-95da-6648d8686581","type":"Plot"}]},"id":"792f987c-4cfd-4fba-9fa0-622a1ba8015a","type":"Row"},{"attributes":{"data_source":{"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"},"glyph":{"id":"05b52419-3b1d-4124-9cc9-56e16a5930a0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2080bd65-9e4c-4c04-972d-33c7e99f98d0","type":"CDSView"}},"id":"0bfe1a28-9e25-436f-8a5b-feed0c3151bf","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"cd13885f-2959-4fff-bbaa-77e2b9622ac8","type":"BasicTickFormatter"},"plot":{"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"},"ticker":{"id":"3c13eeb6-1984-436d-8ae9-1ee9f3392996","type":"BasicTicker"}},"id":"9e4c5e1e-2b98-4e1c-82ea-f33d5e13ac83","type":"LinearAxis"},{"attributes":{},"id":"d3e8cd77-b033-454b-869d-67422cb82138","type":"LinearScale"},{"attributes":{},"id":"66c6751d-77ee-4acf-8572-2978b0db0833","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"66c6751d-77ee-4acf-8572-2978b0db0833","type":"BasicTickFormatter"},"plot":{"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"},"ticker":{"id":"ad11cb5c-ba7a-470c-aed4-d1e6673ae688","type":"BasicTicker"}},"id":"88cd9492-c923-45b8-aa57-9f6abae54dff","type":"LinearAxis"},{"attributes":{},"id":"cd13885f-2959-4fff-bbaa-77e2b9622ac8","type":"BasicTickFormatter"},{"attributes":{},"id":"50864075-a8df-46c9-921e-3ea3a4a9598a","type":"LinearScale"},{"attributes":{},"id":"3c13eeb6-1984-436d-8ae9-1ee9f3392996","type":"BasicTicker"},{"attributes":{"plot":{"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"},"ticker":{"id":"3c13eeb6-1984-436d-8ae9-1ee9f3392996","type":"BasicTicker"}},"id":"213257d0-d6de-46b8-b6b1-3fd0c7924a3f","type":"Grid"},{"attributes":{},"id":"8c546a05-c3f7-4f14-b306-ee77082cf421","type":"LinearScale"},{"attributes":{},"id":"ad11cb5c-ba7a-470c-aed4-d1e6673ae688","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2c6a6d52-ad92-4e7b-a40a-28d6fdeaca17","type":"Plot"},"ticker":{"id":"ad11cb5c-ba7a-470c-aed4-d1e6673ae688","type":"BasicTicker"}},"id":"032b6e1e-f558-4847-959f-e6242b331708","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"05b52419-3b1d-4124-9cc9-56e16a5930a0","type":"Line"},{"attributes":{},"id":"300af2eb-af2d-4fa5-a344-45c7b51d4422","type":"BasicTickFormatter"},{"attributes":{},"id":"2f7ede50-32ee-4a40-acb5-d1061475cb91","type":"BasicTickFormatter"},{"attributes":{},"id":"25de2ca5-9c7a-4cba-96c3-43ec414b9696","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"dfe364c7-6e97-42a4-a685-fdfb1b41bd44","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9e511bc1-f96f-42eb-9add-ec4fe8f94127","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"55664144-f2c8-441f-9ad7-2ade204c7cc9","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"cc4ca7ae-4740-4a61-9db8-1f45c3b26645","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"6fd4f32d-a582-4510-ac3e-ea5b80d0c411","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"14029465-e047-4ac7-87c9-889a9716f8d6","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"702e11cf-520b-47ee-be95-b7b4a9ec319a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14029465-e047-4ac7-87c9-889a9716f8d6","type":"LinearAxis"},{"id":"702e11cf-520b-47ee-be95-b7b4a9ec319a","type":"LinearAxis"},{"id":"3cf18c16-f5a8-4b6c-b94c-4aca339bd64f","type":"Grid"},{"id":"67b47ed0-7e73-48eb-9f73-0205acd03a8d","type":"Grid"},{"id":"135c2de0-630c-4142-b7b5-0398900714bb","type":"GlyphRenderer"},{"id":"f89c34a0-f395-431d-9852-eb188130ba3c","type":"GlyphRenderer"}],"title":{"id":"a59bb07d-2955-4493-a9a9-f910291d9def","type":"Title"},"toolbar":{"id":"9e511bc1-f96f-42eb-9add-ec4fe8f94127","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc4ca7ae-4740-4a61-9db8-1f45c3b26645","type":"Range1d"},"x_scale":{"id":"ab14b60c-c390-479d-ae8a-482ed4476377","type":"LinearScale"},"y_range":{"id":"6fd4f32d-a582-4510-ac3e-ea5b80d0c411","type":"Range1d"},"y_scale":{"id":"bb495f2c-144d-4cc5-b15e-230b7450d50b","type":"LinearScale"}},"id":"f9c011e5-d1bf-4902-a28c-f80aa3f4c53c","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"a59bb07d-2955-4493-a9a9-f910291d9def","type":"Title"}],"root_ids":["14ac7871-da16-4a26-b03e-15548e7db95a"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"df1f8dfc-a1ee-460c-9d4e-36aeb02de28c","elementid":"7b3a1240-7df0-4d28-957e-ec367fff857d","modelid":"14ac7871-da16-4a26-b03e-15548e7db95a"}];
                
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
