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
      };var element = document.getElementById("abb2c269-9037-4c6f-8066-2b6a69b8ad34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'abb2c269-9037-4c6f-8066-2b6a69b8ad34' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"84147cd4-d895-4048-bc71-c7acb0b47b6e":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"31ebb614-db82-4052-b6f7-35d72b9e2bd9","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"b9f01bf2-c3d4-4db0-830a-b9f90c9b837b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"31ebb614-db82-4052-b6f7-35d72b9e2bd9","type":"LinearAxis"},{"id":"b9f01bf2-c3d4-4db0-830a-b9f90c9b837b","type":"LinearAxis"},{"id":"7136d12b-060a-41ef-8a7b-c0379d42d514","type":"Grid"},{"id":"ff6f1f32-d287-4d47-9a35-82455fa89b53","type":"Grid"},{"id":"545fcafc-9b71-4615-90f1-28ad26a52657","type":"GlyphRenderer"},{"id":"79ff4a3d-49a5-427d-a07d-5f43b9c14f85","type":"GlyphRenderer"}],"title":{"id":"1c874848-6d1d-460c-9d40-06e982d7e70a","type":"Title"},"tool_events":{"id":"3a8a97ed-e60d-4388-98b0-561b53bc8afa","type":"ToolEvents"},"toolbar":{"id":"ba326c0f-aa66-468b-8842-390081202c01","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9636b091-3a36-4cbf-bfbe-617f73d92613","type":"Range1d"},"y_range":{"id":"9102c293-5f10-4615-ad51-082bc84eb439","type":"Range1d"}},"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"4275e0b9-7b52-4637-88cb-17fa1dbee7ba","type":"BasicTickFormatter"},"plot":{"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"},"ticker":{"id":"8c171495-a304-4bb1-9072-669c1977fdd1","type":"BasicTicker"}},"id":"e9a871b6-7db4-4b3f-9248-472363d78dde","type":"LinearAxis"},{"attributes":{},"id":"750e992e-4288-405f-aeb3-ee3d727c2be1","type":"BasicTickFormatter"},{"attributes":{},"id":"60befb06-64de-4eef-b7f7-52e79724808a","type":"ToolEvents"},{"attributes":{},"id":"911eb9d8-3e84-4460-a1c5-20d0d4a0c604","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"1c332fba-5e70-4857-a4c8-e32d4a975418","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"06d6bce7-49fc-4f69-955d-834e71a959fb","type":"BasicTickFormatter"},"plot":{"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},"ticker":{"id":"3485e033-1be3-416a-8c62-a8a45bd560fc","type":"BasicTicker"}},"id":"988b6d62-58ef-43e9-8fb5-2907814456fc","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"},"ticker":{"id":"8c171495-a304-4bb1-9072-669c1977fdd1","type":"BasicTicker"}},"id":"84949efd-e2f7-4765-9214-7f564169f8ea","type":"Grid"},{"attributes":{"plot":null,"text":"I"},"id":"4c62d313-7f15-433f-a237-133b2404f25a","type":"Title"},{"attributes":{"data_source":{"id":"32d0d5cc-99d3-4b42-80e8-09a0a968a03a","type":"ColumnDataSource"},"glyph":{"id":"a2a130a2-4c74-4235-89b2-ebe74bd8595b","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"6727d5f7-0fec-41bb-a51f-87fdee4f5ea7","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"198fa7b4-d316-46ed-adfe-5c12c89db23a","type":"Line"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e50e9f8-424a-4c17-9b10-3394a99f8df3","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e2ceb982-903d-4185-a7b6-57ad9e239ba6","type":"Toolbar"},{"attributes":{},"id":"3a8a97ed-e60d-4388-98b0-561b53bc8afa","type":"ToolEvents"},{"attributes":{"children":[{"id":"112caf9d-d602-484e-a276-4a8b6531f6e0","type":"Row"},{"id":"59ad9429-c83c-48c1-9743-c4f30b82aa0c","type":"Row"}]},"id":"273e9c6c-441e-4800-92b1-d4c4db998d83","type":"Column"},{"attributes":{"data_source":{"id":"bf82d175-7412-4e5b-a8c0-c9e916527d1a","type":"ColumnDataSource"},"glyph":{"id":"be902671-601d-42e2-bcb7-143885914eb0","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"ded881eb-8514-4ce2-b89a-130293519c47","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},"ticker":{"id":"52363f3d-1586-46b4-8bf2-60a577995620","type":"BasicTicker"}},"id":"50b379cf-4a60-4d26-9977-479952b183d0","type":"Grid"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"9636b091-3a36-4cbf-bfbe-617f73d92613","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"be902671-601d-42e2-bcb7-143885914eb0","type":"Circle"},{"attributes":{},"id":"1686c60c-65c3-4e5a-b09d-bfe66ea86de3","type":"BasicTickFormatter"},{"attributes":{},"id":"7474980e-79be-4554-ac3b-b9defef7ffd1","type":"BasicTicker"},{"attributes":{"plot":null,"text":"III"},"id":"6d152b75-0504-4c11-8a68-1f94df626d2f","type":"Title"},{"attributes":{},"id":"06d7953d-916b-495a-8a6b-d6932ab99158","type":"ToolEvents"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"9102c293-5f10-4615-ad51-082bc84eb439","type":"Range1d"},{"attributes":{"data_source":{"id":"32d0d5cc-99d3-4b42-80e8-09a0a968a03a","type":"ColumnDataSource"},"glyph":{"id":"4e50e9f8-424a-4c17-9b10-3394a99f8df3","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"545fcafc-9b71-4615-90f1-28ad26a52657","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"},"ticker":{"id":"911eb9d8-3e84-4460-a1c5-20d0d4a0c604","type":"BasicTicker"}},"id":"7136d12b-060a-41ef-8a7b-c0379d42d514","type":"Grid"},{"attributes":{"callback":null,"column_names":["xiv","xi","xiii","yiii","yiv","yii","yi","xii"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"bf82d175-7412-4e5b-a8c0-c9e916527d1a","type":"ColumnDataSource"},{"attributes":{},"id":"0b21bf77-3bf3-47e2-b002-d4adc352dba5","type":"BasicTicker"},{"attributes":{},"id":"06d6bce7-49fc-4f69-955d-834e71a959fb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"},"ticker":{"id":"395d8902-daae-43c6-a775-74dca690dc39","type":"BasicTicker"}},"id":"9687a968-3f44-48c3-a7eb-f440d05842d1","type":"Grid"},{"attributes":{"plot":null,"text":"II"},"id":"33d15909-c25f-48c7-8438-bba0f0888010","type":"Title"},{"attributes":{"children":[{"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},{"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"}]},"id":"112caf9d-d602-484e-a276-4a8b6531f6e0","type":"Row"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"32d0d5cc-99d3-4b42-80e8-09a0a968a03a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"32d0d5cc-99d3-4b42-80e8-09a0a968a03a","type":"ColumnDataSource"},"glyph":{"id":"34467220-fef5-4c0c-b646-27b176a1c6af","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"efaabd88-3ae3-4482-90c4-8e94f1172d38","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bf82d175-7412-4e5b-a8c0-c9e916527d1a","type":"ColumnDataSource"},"glyph":{"id":"e95dfaa6-d415-4ad5-958c-59330c8ac8e7","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"9b92ad60-c0fd-49a3-9821-b6a6e87d5af6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"e95dfaa6-d415-4ad5-958c-59330c8ac8e7","type":"Circle"},{"attributes":{"data_source":{"id":"bf82d175-7412-4e5b-a8c0-c9e916527d1a","type":"ColumnDataSource"},"glyph":{"id":"1c332fba-5e70-4857-a4c8-e32d4a975418","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"a2c007fb-38f0-4956-97db-f1d7a2486ada","type":"GlyphRenderer"},{"attributes":{},"id":"b4c65367-ed07-4a21-b689-e03d2931d10c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},"ticker":{"id":"3485e033-1be3-416a-8c62-a8a45bd560fc","type":"BasicTicker"}},"id":"4177e102-0f29-44b1-9361-9390f139fdec","type":"Grid"},{"attributes":{},"id":"4f0c2874-fc54-486d-96c7-b0b3163e34f6","type":"BasicTickFormatter"},{"attributes":{},"id":"a05eae82-1656-47c2-8cb2-6d7372f639df","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34467220-fef5-4c0c-b646-27b176a1c6af","type":"Line"},{"attributes":{},"id":"23580318-970e-442b-9d60-0f1d4112642a","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1a27f384-9119-4790-87a1-b5cb40220494","type":"Toolbar"},{"attributes":{},"id":"395d8902-daae-43c6-a775-74dca690dc39","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ba326c0f-aa66-468b-8842-390081202c01","type":"Toolbar"},{"attributes":{},"id":"8c171495-a304-4bb1-9072-669c1977fdd1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8e3603a8-3780-4182-a969-ee78cfc3a492","type":"Toolbar"},{"attributes":{},"id":"52363f3d-1586-46b4-8bf2-60a577995620","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"750e992e-4288-405f-aeb3-ee3d727c2be1","type":"BasicTickFormatter"},"plot":{"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},"ticker":{"id":"7474980e-79be-4554-ac3b-b9defef7ffd1","type":"BasicTicker"}},"id":"f2c7a352-7be4-49db-af13-588590115463","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2a130a2-4c74-4235-89b2-ebe74bd8595b","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"b4c65367-ed07-4a21-b689-e03d2931d10c","type":"BasicTickFormatter"},"plot":{"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"},"ticker":{"id":"0b21bf77-3bf3-47e2-b002-d4adc352dba5","type":"BasicTicker"}},"id":"b9f01bf2-c3d4-4db0-830a-b9f90c9b837b","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"0b2365b6-ae22-4c3c-960f-5c27c0331862","type":"BasicTickFormatter"},"plot":{"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"},"ticker":{"id":"911eb9d8-3e84-4460-a1c5-20d0d4a0c604","type":"BasicTicker"}},"id":"31ebb614-db82-4052-b6f7-35d72b9e2bd9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"5c7238de-0636-4aa0-bdf5-27187f60a7dd","type":"Circle"},{"attributes":{"data_source":{"id":"32d0d5cc-99d3-4b42-80e8-09a0a968a03a","type":"ColumnDataSource"},"glyph":{"id":"198fa7b4-d316-46ed-adfe-5c12c89db23a","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"f3624f80-1266-41d4-9854-0e383db07897","type":"GlyphRenderer"},{"attributes":{},"id":"4275e0b9-7b52-4637-88cb-17fa1dbee7ba","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"ff28bb7b-02e5-472c-923e-fa2d717fe01e","type":"BasicTickFormatter"},"plot":{"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},"ticker":{"id":"52363f3d-1586-46b4-8bf2-60a577995620","type":"BasicTicker"}},"id":"2fcc1faa-15c6-497d-8a93-d129e6acfdc5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},"ticker":{"id":"7474980e-79be-4554-ac3b-b9defef7ffd1","type":"BasicTicker"}},"id":"38e28477-9cf8-43a9-beee-1d08e66211c7","type":"Grid"},{"attributes":{"data_source":{"id":"bf82d175-7412-4e5b-a8c0-c9e916527d1a","type":"ColumnDataSource"},"glyph":{"id":"5c7238de-0636-4aa0-bdf5-27187f60a7dd","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"79ff4a3d-49a5-427d-a07d-5f43b9c14f85","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"IV"},"id":"1c874848-6d1d-460c-9d40-06e982d7e70a","type":"Title"},{"attributes":{},"id":"0b2365b6-ae22-4c3c-960f-5c27c0331862","type":"BasicTickFormatter"},{"attributes":{},"id":"3485e033-1be3-416a-8c62-a8a45bd560fc","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"988b6d62-58ef-43e9-8fb5-2907814456fc","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"f2c7a352-7be4-49db-af13-588590115463","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"988b6d62-58ef-43e9-8fb5-2907814456fc","type":"LinearAxis"},{"id":"f2c7a352-7be4-49db-af13-588590115463","type":"LinearAxis"},{"id":"4177e102-0f29-44b1-9361-9390f139fdec","type":"Grid"},{"id":"38e28477-9cf8-43a9-beee-1d08e66211c7","type":"Grid"},{"id":"6727d5f7-0fec-41bb-a51f-87fdee4f5ea7","type":"GlyphRenderer"},{"id":"9b92ad60-c0fd-49a3-9821-b6a6e87d5af6","type":"GlyphRenderer"}],"title":{"id":"4c62d313-7f15-433f-a237-133b2404f25a","type":"Title"},"tool_events":{"id":"60befb06-64de-4eef-b7f7-52e79724808a","type":"ToolEvents"},"toolbar":{"id":"1a27f384-9119-4790-87a1-b5cb40220494","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9636b091-3a36-4cbf-bfbe-617f73d92613","type":"Range1d"},"y_range":{"id":"9102c293-5f10-4615-ad51-082bc84eb439","type":"Range1d"}},"id":"2b7dab36-fff9-44d2-94b7-35421780968a","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"4f0c2874-fc54-486d-96c7-b0b3163e34f6","type":"BasicTickFormatter"},"plot":{"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"},"ticker":{"id":"395d8902-daae-43c6-a775-74dca690dc39","type":"BasicTicker"}},"id":"81fa21e5-360b-4044-888f-5131d05e6ff3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"},"ticker":{"id":"0b21bf77-3bf3-47e2-b002-d4adc352dba5","type":"BasicTicker"}},"id":"ff6f1f32-d287-4d47-9a35-82455fa89b53","type":"Grid"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1686c60c-65c3-4e5a-b09d-bfe66ea86de3","type":"BasicTickFormatter"},"plot":{"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},"ticker":{"id":"a05eae82-1656-47c2-8cb2-6d7372f639df","type":"BasicTicker"}},"id":"9fd6e859-f4c8-4dd9-9a4c-add774e61d69","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"9fd6e859-f4c8-4dd9-9a4c-add774e61d69","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"2fcc1faa-15c6-497d-8a93-d129e6acfdc5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9fd6e859-f4c8-4dd9-9a4c-add774e61d69","type":"LinearAxis"},{"id":"2fcc1faa-15c6-497d-8a93-d129e6acfdc5","type":"LinearAxis"},{"id":"9318db63-9a2e-476a-9f87-d5dee02c6061","type":"Grid"},{"id":"50b379cf-4a60-4d26-9977-479952b183d0","type":"Grid"},{"id":"f3624f80-1266-41d4-9854-0e383db07897","type":"GlyphRenderer"},{"id":"ded881eb-8514-4ce2-b89a-130293519c47","type":"GlyphRenderer"}],"title":{"id":"6d152b75-0504-4c11-8a68-1f94df626d2f","type":"Title"},"tool_events":{"id":"23580318-970e-442b-9d60-0f1d4112642a","type":"ToolEvents"},"toolbar":{"id":"e2ceb982-903d-4185-a7b6-57ad9e239ba6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9636b091-3a36-4cbf-bfbe-617f73d92613","type":"Range1d"},"y_range":{"id":"9102c293-5f10-4615-ad51-082bc84eb439","type":"Range1d"}},"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},{"attributes":{},"id":"ff28bb7b-02e5-472c-923e-fa2d717fe01e","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},{"id":"13ab7f41-090a-4791-93ae-2d16ffaf0e29","type":"Plot"}]},"id":"59ad9429-c83c-48c1-9743-c4f30b82aa0c","type":"Row"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"81fa21e5-360b-4044-888f-5131d05e6ff3","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"e9a871b6-7db4-4b3f-9248-472363d78dde","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"81fa21e5-360b-4044-888f-5131d05e6ff3","type":"LinearAxis"},{"id":"e9a871b6-7db4-4b3f-9248-472363d78dde","type":"LinearAxis"},{"id":"9687a968-3f44-48c3-a7eb-f440d05842d1","type":"Grid"},{"id":"84949efd-e2f7-4765-9214-7f564169f8ea","type":"Grid"},{"id":"efaabd88-3ae3-4482-90c4-8e94f1172d38","type":"GlyphRenderer"},{"id":"a2c007fb-38f0-4956-97db-f1d7a2486ada","type":"GlyphRenderer"}],"title":{"id":"33d15909-c25f-48c7-8438-bba0f0888010","type":"Title"},"tool_events":{"id":"06d7953d-916b-495a-8a6b-d6932ab99158","type":"ToolEvents"},"toolbar":{"id":"8e3603a8-3780-4182-a969-ee78cfc3a492","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9636b091-3a36-4cbf-bfbe-617f73d92613","type":"Range1d"},"y_range":{"id":"9102c293-5f10-4615-ad51-082bc84eb439","type":"Range1d"}},"id":"d37a4ef0-97e2-4641-9d22-2534df3fff09","type":"Plot"},{"attributes":{"plot":{"id":"953a3125-18fe-4c8f-9186-f61e12495dcf","type":"Plot"},"ticker":{"id":"a05eae82-1656-47c2-8cb2-6d7372f639df","type":"BasicTicker"}},"id":"9318db63-9a2e-476a-9f87-d5dee02c6061","type":"Grid"}],"root_ids":["273e9c6c-441e-4800-92b1-d4c4db998d83"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"84147cd4-d895-4048-bc71-c7acb0b47b6e","elementid":"abb2c269-9037-4c6f-8066-2b6a69b8ad34","modelid":"273e9c6c-441e-4800-92b1-d4c4db998d83"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
