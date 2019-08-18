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
      };var element = document.getElementById("4f3776ec-c2a2-48a1-b350-edb4be7ae524");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4f3776ec-c2a2-48a1-b350-edb4be7ae524' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"6f6888d2-003d-4e83-aa09-b7d79cea7089":{"roots":{"references":[{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"7d9304e4-1405-4d79-9c00-2a5848f1d088","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"90737dc0-a6fa-459b-b880-c577f7c5a042","type":"ColumnDataSource"},"glyph":{"id":"560aa6c9-f4f7-4a66-9c38-595bc8754325","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6e55f5f-881a-4adb-b9f5-3e255eb32959","type":"VBar"},"selection_glyph":null,"view":{"id":"99860781-8106-49cb-94fc-d997e8c9b335","type":"CDSView"}},"id":"c1dda3ca-be9a-4868-a653-dc6c4d6e73ac","type":"GlyphRenderer"},{"attributes":{"source":{"id":"90737dc0-a6fa-459b-b880-c577f7c5a042","type":"ColumnDataSource"}},"id":"99860781-8106-49cb-94fc-d997e8c9b335","type":"CDSView"},{"attributes":{},"id":"6290332f-c70e-445d-9cf0-1aeae6e09526","type":"Selection"},{"attributes":{},"id":"04ed0a1d-674b-4443-9b7e-3a3d833991d7","type":"Selection"},{"attributes":{"days":[1,8,15,22]},"id":"bd6d50ab-d830-44ed-823a-0e7ea0aba3c1","type":"DaysTicker"},{"attributes":{},"id":"0f501041-e4e1-4e8f-842d-8b4a4fa96b39","type":"UnionRenderers"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"33fd87c5-a9b9-49c6-8a29-47100dedebbc","type":"Segment"},{"attributes":{"months":[0,6]},"id":"3021ae88-edd5-459b-893b-dab01091694f","type":"MonthsTicker"},{"attributes":{},"id":"59594949-2c4b-49e4-a9bc-f03e109600bc","type":"BasicTicker"},{"attributes":{},"id":"60e60c37-2c64-4d18-afe8-8a5147a5263d","type":"Selection"},{"attributes":{"months":[0,4,8]},"id":"4eadebca-7400-4135-b8b9-cab12e56e00a","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"1762537d-a17a-4f2b-b342-df61328f3c7f","type":"ColumnDataSource"},"glyph":{"id":"33fd87c5-a9b9-49c6-8a29-47100dedebbc","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10dee6c4-458a-47d8-9f0e-7ff698652fd6","type":"Segment"},"selection_glyph":null,"view":{"id":"8efca53d-e69d-4ffd-ab9a-867c897a164e","type":"CDSView"}},"id":"4f0eb2e2-fd82-4af6-82cf-95751a32cfdc","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8a21d5e8-fb4a-48bd-9b8f-40bdfb921441","type":"DataRange1d"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"7a0e4ef8-b231-48d5-b4db-472605211914","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cba953c-76a1-411f-8a07-804897d1ffdd","type":"DatetimeTicker"}},"id":"366ef237-d471-4d0c-82f0-c092d04f78d1","type":"Grid"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"15eb4fbe-3ac0-42b6-a547-98c71eba5496","type":"Title"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"8ef8c51c-bbf4-4459-b97d-63dae5a516ee","type":"VBar"},{"attributes":{"formatter":{"id":"daf29cc8-ea55-4068-8e64-c7e0ef8227d8","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7a0e4ef8-b231-48d5-b4db-472605211914","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cba953c-76a1-411f-8a07-804897d1ffdd","type":"DatetimeTicker"}},"id":"87b9c405-27e4-4512-89f2-5fa3665113ac","type":"DatetimeAxis"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"77571831-4633-430f-9472-7aac5700dd77","type":"MonthsTicker"},{"attributes":{},"id":"8154b56a-d308-411c-a4ce-41229baed0d7","type":"LinearScale"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"02456ad2-2dcd-456f-bb61-90cbddaf574c","type":"AdaptiveTicker"},{"attributes":{"callback":null,"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}},"selected":{"id":"04ed0a1d-674b-4443-9b7e-3a3d833991d7","type":"Selection"},"selection_policy":{"id":"3ae9a8eb-96b1-4e37-aeb2-0987ab1f158b","type":"UnionRenderers"}},"id":"1762537d-a17a-4f2b-b342-df61328f3c7f","type":"ColumnDataSource"},{"attributes":{},"id":"e601c78a-18a7-4a2b-bdf2-9ad15961cea8","type":"LinearScale"},{"attributes":{},"id":"a1c70204-1c67-4266-acaf-aef21244e6e6","type":"PanTool"},{"attributes":{},"id":"07301c96-eb9d-43b4-bb15-c80d91af465b","type":"SaveTool"},{"attributes":{},"id":"daf29cc8-ea55-4068-8e64-c7e0ef8227d8","type":"DatetimeTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1c70204-1c67-4266-acaf-aef21244e6e6","type":"PanTool"},{"id":"95c265d0-f681-4ae9-9926-63f3e80a2abc","type":"WheelZoomTool"},{"id":"adb5f20b-1684-4dcf-b877-4b31b7d3e338","type":"BoxZoomTool"},{"id":"2f7cde7c-76a0-4a71-bb46-55c847ed10b2","type":"ResetTool"},{"id":"07301c96-eb9d-43b4-bb15-c80d91af465b","type":"SaveTool"}]},"id":"164558e0-a6c4-4dd2-8727-34cf1f58e8e6","type":"Toolbar"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"b95c7eb7-af86-4e9e-8453-361907b8a902","type":"DaysTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"7a0e4ef8-b231-48d5-b4db-472605211914","subtype":"Figure","type":"Plot"},"ticker":{"id":"59594949-2c4b-49e4-a9bc-f03e109600bc","type":"BasicTicker"}},"id":"ba17b6d0-59a6-4b9c-a3b5-7240bca3bce6","type":"Grid"},{"attributes":{},"id":"7ec28639-78fb-424a-982a-95226b3eb01e","type":"UnionRenderers"},{"attributes":{"below":[{"id":"87b9c405-27e4-4512-89f2-5fa3665113ac","type":"DatetimeAxis"}],"left":[{"id":"553bd8e2-205f-4706-a55d-3075d16cfe2b","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"87b9c405-27e4-4512-89f2-5fa3665113ac","type":"DatetimeAxis"},{"id":"366ef237-d471-4d0c-82f0-c092d04f78d1","type":"Grid"},{"id":"553bd8e2-205f-4706-a55d-3075d16cfe2b","type":"LinearAxis"},{"id":"ba17b6d0-59a6-4b9c-a3b5-7240bca3bce6","type":"Grid"},{"id":"84c5b299-505d-4c37-ba22-bb3da9f02173","type":"BoxAnnotation"},{"id":"4f0eb2e2-fd82-4af6-82cf-95751a32cfdc","type":"GlyphRenderer"},{"id":"c1dda3ca-be9a-4868-a653-dc6c4d6e73ac","type":"GlyphRenderer"},{"id":"cab65730-4c0e-40cb-a040-2e9be56628e6","type":"GlyphRenderer"}],"title":{"id":"15eb4fbe-3ac0-42b6-a547-98c71eba5496","type":"Title"},"toolbar":{"id":"164558e0-a6c4-4dd2-8727-34cf1f58e8e6","type":"Toolbar"},"x_range":{"id":"1bdab2c1-f024-4c1c-89ba-57ca5e54dba5","type":"DataRange1d"},"x_scale":{"id":"e601c78a-18a7-4a2b-bdf2-9ad15961cea8","type":"LinearScale"},"y_range":{"id":"8a21d5e8-fb4a-48bd-9b8f-40bdfb921441","type":"DataRange1d"},"y_scale":{"id":"8154b56a-d308-411c-a4ce-41229baed0d7","type":"LinearScale"}},"id":"7a0e4ef8-b231-48d5-b4db-472605211914","subtype":"Figure","type":"Plot"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"3c0a33a2-19b7-4a12-8fc6-246defaca63c","type":"AdaptiveTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"86605ad9-8b09-4701-b610-99b645fde309","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84c5b299-505d-4c37-ba22-bb3da9f02173","type":"BoxAnnotation"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"3c0a33a2-19b7-4a12-8fc6-246defaca63c","type":"AdaptiveTicker"},{"id":"d694bab3-e106-485d-a0bf-df9985ca5fa7","type":"AdaptiveTicker"},{"id":"02456ad2-2dcd-456f-bb61-90cbddaf574c","type":"AdaptiveTicker"},{"id":"b95c7eb7-af86-4e9e-8453-361907b8a902","type":"DaysTicker"},{"id":"3d4f2d59-743b-4908-bd32-9872f6c383d3","type":"DaysTicker"},{"id":"bd6d50ab-d830-44ed-823a-0e7ea0aba3c1","type":"DaysTicker"},{"id":"699572f6-b659-4a57-b16f-2ca4dd5909f7","type":"DaysTicker"},{"id":"7d9304e4-1405-4d79-9c00-2a5848f1d088","type":"MonthsTicker"},{"id":"77571831-4633-430f-9472-7aac5700dd77","type":"MonthsTicker"},{"id":"4eadebca-7400-4135-b8b9-cab12e56e00a","type":"MonthsTicker"},{"id":"3021ae88-edd5-459b-893b-dab01091694f","type":"MonthsTicker"},{"id":"8e002c5d-e7d4-45af-b8ef-6a1b3819f426","type":"YearsTicker"}]},"id":"7cba953c-76a1-411f-8a07-804897d1ffdd","type":"DatetimeTicker"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}},"selected":{"id":"60e60c37-2c64-4d18-afe8-8a5147a5263d","type":"Selection"},"selection_policy":{"id":"7ec28639-78fb-424a-982a-95226b3eb01e","type":"UnionRenderers"}},"id":"b122350a-eeff-4412-8e69-4ed571c42733","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b122350a-eeff-4412-8e69-4ed571c42733","type":"ColumnDataSource"}},"id":"2072422a-bd48-4de5-8154-148ba884e06e","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"c6e55f5f-881a-4adb-b9f5-3e255eb32959","type":"VBar"},{"attributes":{},"id":"2f7cde7c-76a0-4a71-bb46-55c847ed10b2","type":"ResetTool"},{"attributes":{"source":{"id":"1762537d-a17a-4f2b-b342-df61328f3c7f","type":"ColumnDataSource"}},"id":"8efca53d-e69d-4ffd-ab9a-867c897a164e","type":"CDSView"},{"attributes":{"callback":null},"id":"1bdab2c1-f024-4c1c-89ba-57ca5e54dba5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b122350a-eeff-4412-8e69-4ed571c42733","type":"ColumnDataSource"},"glyph":{"id":"8ef8c51c-bbf4-4459-b97d-63dae5a516ee","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"86605ad9-8b09-4701-b610-99b645fde309","type":"VBar"},"selection_glyph":null,"view":{"id":"2072422a-bd48-4de5-8154-148ba884e06e","type":"CDSView"}},"id":"cab65730-4c0e-40cb-a040-2e9be56628e6","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"84c5b299-505d-4c37-ba22-bb3da9f02173","type":"BoxAnnotation"}},"id":"adb5f20b-1684-4dcf-b877-4b31b7d3e338","type":"BoxZoomTool"},{"attributes":{},"id":"c7326229-66b9-494d-b84a-3842fd7bbb24","type":"BasicTickFormatter"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"d694bab3-e106-485d-a0bf-df9985ca5fa7","type":"AdaptiveTicker"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}},"selected":{"id":"6290332f-c70e-445d-9cf0-1aeae6e09526","type":"Selection"},"selection_policy":{"id":"0f501041-e4e1-4e8f-842d-8b4a4fa96b39","type":"UnionRenderers"}},"id":"90737dc0-a6fa-459b-b880-c577f7c5a042","type":"ColumnDataSource"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"3d4f2d59-743b-4908-bd32-9872f6c383d3","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"699572f6-b659-4a57-b16f-2ca4dd5909f7","type":"DaysTicker"},{"attributes":{},"id":"95c265d0-f681-4ae9-9926-63f3e80a2abc","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"c7326229-66b9-494d-b84a-3842fd7bbb24","type":"BasicTickFormatter"},"plot":{"id":"7a0e4ef8-b231-48d5-b4db-472605211914","subtype":"Figure","type":"Plot"},"ticker":{"id":"59594949-2c4b-49e4-a9bc-f03e109600bc","type":"BasicTicker"}},"id":"553bd8e2-205f-4706-a55d-3075d16cfe2b","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"560aa6c9-f4f7-4a66-9c38-595bc8754325","type":"VBar"},{"attributes":{},"id":"8e002c5d-e7d4-45af-b8ef-6a1b3819f426","type":"YearsTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"10dee6c4-458a-47d8-9f0e-7ff698652fd6","type":"Segment"},{"attributes":{},"id":"3ae9a8eb-96b1-4e37-aeb2-0987ab1f158b","type":"UnionRenderers"}],"root_ids":["7a0e4ef8-b231-48d5-b4db-472605211914"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6f6888d2-003d-4e83-aa09-b7d79cea7089","roots":{"7a0e4ef8-b231-48d5-b4db-472605211914":"4f3776ec-c2a2-48a1-b350-edb4be7ae524"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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